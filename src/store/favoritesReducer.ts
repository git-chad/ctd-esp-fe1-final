import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchCharData } from "./characterReducer";

export interface FavoritesState {
  list: number[];
  characters: Character[];
}

const initialState: FavoritesState = {
  list: [],
  characters: [],
};

const getFavorites = (): number[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const updateFavorites = (favorites: number[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    return getFavorites();
  }
);

export const fetchToggleFavorite = createAsyncThunk(
  "favorites/fetchToggleFavorite",
  async (id: number, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { list } = state.favorites;
    const updatedFavorites = list.includes(id)
      ? list.filter((favId) => favId !== id)
      : [...list, id];

    updateFavorites(updatedFavorites);
    dispatch(fetchFavoriteCharacters());
    return updatedFavorites;
  }
);

const getCharacterById = async (id: number): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return fetchCharData([data])[0];
};

export const fetchFavoriteCharacters = createAsyncThunk(
  "favorites/fetchFavoriteCharacters",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { list } = state.favorites;

    const characters = await Promise.all(
      list.map((id) => getCharacterById(id))
    );

    return characters;
  }
);

export const fetchResetFavorites = createAsyncThunk(
  "favorites/fetchResetFavorites",
  async () => {
    updateFavorites([]);
    return [];
  }
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchToggleFavorite.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchResetFavorites.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default favoritesSlice.reducer;
