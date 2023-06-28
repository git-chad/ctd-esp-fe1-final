import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DetailsState {
  character: Character;
  isLoading: boolean;
  episodes: Array<Episode> | undefined;
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
    title: episode.title,
    date: episode.date,
    episode: episode.episode,
  }));
};

const getEpisodesByArray = async (array: Array<number>) => {
  let data = [];
  if (array.length > 0) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${String(array)}`
    ).then((response) => response.json());
    if (response.length > 0) {
      data = mapEpisodes(response);
    } else {
      data = mapEpisodes([response]);
    }
  }
  return data;
};

export const fetchEpisodes = createAsyncThunk(
  "favorites/fetchEpisodes",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { character } = state.Details;
    if (character.episodes === un) {
      return [];
    }
    const arrayEpisodes = character.episodes.map((episode) => {
      const arrayUrl = episode.split("/");
      const id = arrayUrl[arrayUrl.length - 1];
      return Number(id);
    });
    const response = getEpisodesByArray(arrayEpisodes);
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
