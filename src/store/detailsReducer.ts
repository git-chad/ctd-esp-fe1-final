import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * state and initial state of details.
 */
interface DetailsState {
  character: Character;
  isLoading: boolean;
  episodes: Episode[];
}

const initialState: DetailsState = {
  character: {
    id: -1,
    name: "",
    url: "",
    img: "",
    planet: "",
    gender: "",
    episodes: [],
  },
  isLoading: true,
  episodes: [],
};

/**
 * maps the episode data received from the api.
 * @param episodes - array of episode data.
 * @returns the mapped array of episodes.
 */
const mapEpisodes = (episodes: any): Episode[] => {
  return episodes.map((episode: any) => ({
    id: episode.id,
    title: episode.name,
    date: episode.air_date,
    episode: episode.episode,
  }));
};

/**
 * tetrieves the episodes by an array of ids.
 * @param array - the array of episode ids.
 * @returns the array of episodes.
 */
const getEpisodesByArray = async (array: number[]): Promise<Episode[]> => {
  let data: Episode[] = [];
  if (array.length > 0) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${array.join(",")}`
    ).then((response) => response.json());
    data = mapEpisodes(Array.isArray(response) ? response : [response]);
  }
  return data;
};

export const fetchEpisodes = createAsyncThunk(
  "details/fetchEpisodes",
  async (id: number, { getState }) => {
    const state = getState() as RootState;
    const { character } = state.details;

    if (character.episodes === undefined) {
      return [];
    }

    const arrayEpisodes = character.episodes.map((episode) => {
      const arrayUrl = episode.split("/");
      const episodeId = arrayUrl[arrayUrl.length - 1];
      return Number(episodeId);
    });

    const response = await getEpisodesByArray(arrayEpisodes);
    return response;
  }
);

/**
 * details slice.
 */

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.character = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEpisodes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.episodes = action.payload;
      });
  },
});

export const { setDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
