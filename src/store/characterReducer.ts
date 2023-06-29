import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

/**
 * state and initial state of all characters.
 */
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

/**
 * maps character data and structurizes it.
 * @param charDataToMap - character data to map.
 * @returns an array of mapped characters.
 */
export const fetchCharData = (charDataToMap: any): Array<Character> => {
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

/**
 * fetches characters from the current page based on the URL.
 * @param url - The url of the page.
 * @returns The fetched characters data.
 */
const getCharactersPageDependent = async (
  url: string
): Promise<CharactersState> => {
  const response = await fetch(url).then((response) => response.json());
  const data: CharactersState = {
    isLoading: false,
    prev: response.info.prev,
    next: response.info.next,
    characters: fetchCharData(response.results),
  };
  return data;
};

/**
 * fetches filtered characters by their names.
 * @param filter - the filter to apply.
 * @returns the fetched filtered characters data.
 */
const getFilteredCharacters = async (
  filter: string
): Promise<CharactersState> => {
  return getCharactersPageDependent(
    `https://rickandmortyapi.com/api/character/?name=${filter}&page=1`
  );
};

/**
 * fetches the first page of characters.
 * @returns The fetched characters data for the first page.
 */
const getCharacters = async (): Promise<CharactersState> => {
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

/**
 * characters slice.
 */
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
        state.next = null;
        state.prev = null;
        state.characters = [];
      });
  },
});

export const { setFilter, resetFilter } = charactersSlice.actions;
export default charactersSlice.reducer;
