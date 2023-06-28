import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const mapEpisodes = (episodes: any) => {
  return episodes.map((episode: any) => ({
    id: episode.id,
    title: episode.name,
    date: episode.air_date,
    episode: episode.episode,
  }));
};

const getEpisodesByArray = async (array: number[]) => {
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
      const episodeId = arrayUrl[arrayUrl.length - 1]; // Use a different variable name here
      return Number(episodeId);
    });

    const response = await getEpisodesByArray(arrayEpisodes);
    return response;
  }
);

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
