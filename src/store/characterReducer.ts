import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CharactersState {
  isLoading: boolean;
  prev: string | null;
  next: string | null;
  characters: Array<Character>;
  filter?: string;
}

const initialState: CharactersState = {
  isLoading: true,
  prev: null,
  next: null,
  characters: [],
  filter: "",
};

const fetchCharData = (charDataToMap: any) => {
  return charDataToMap.map((character: any) => ({
    id: character.id,
    name: character.name,
    img: character.image,
    planet: character.location.name,
    gender: character.gender,
    episodes: character.episode,
    url: character.url,
  }));
};

const getCharactersPageDependent = async (url: string) => {
  const response = await fetch(url).then((response) => response.json());
  const data: CharactersState = {
    isLoading: false,
    prev: response.info.prev,
    next: response.info.next,
    characters: fetchCharData(response.results),
  };
  return data;
};

const getFilteredCharacters = async (filter: string) => {
  return getCharactersPageDependent(
    `https://rickandmortyapi.com/api/character/?name=${filter}&page=1`
  );
};

const getCharacters = async () => {
  return getCharactersPageDependent(
    "https://rickandmortyapi.com/api/character?page=1"
  );
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await getCharacters();
    return response;
  }
);

export const fetchFilteredCharacters = createAsyncThunk(
  "characters/fetchFilteredCharacters",
  async (filter: string) => {
    const response = await getFilteredCharacters(filter);
    return response;
  }
);

export const fetchPreviousCharacters = createAsyncThunk(
  "characters/fetchPreviousCharacters",
  async (unused, { getState }) => {
    const state = getState() as RootState;
    const { prev } = state.characters;

    if (prev == null) {
      throw Error(`There's no more characters`);
    }
    const response = await getCharactersPageDependent(prev);
    return response;
  }
);

export const fetchNextCharacters = createAsyncThunk(
  "characters/fetchNextCharacters",
  async (unused, { getState }) => {
    const state = getState() as RootState;
    const { next } = state.characters;

    if (next == null) {
      throw Error(`There's no more characters`);
    }
    const response = await getCharactersPageDependent(next);
    return response;
  }
);

// add the character slice for favorite chars here vvv

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    resetFilter(state) {
      state.filter = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.characters = action.payload.characters;
      })

      .addCase(fetchNextCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNextCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.characters = action.payload.characters;
      })

      .addCase(fetchPreviousCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPreviousCharacters.fulfilled, (state, action) => {
        state.isLoading = false;      
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.characters = action.payload.characters;
      })
      
      .addCase(fetchFilteredCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.characters = action.payload.characters;
      })
      .addCase(fetchFilteredCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.next = null
        state.prev = null
        state.characters = []
      })
  },
});

export const {setFilter, resetFilter} = charactersSlice.actions
export default charactersSlice.reducer
