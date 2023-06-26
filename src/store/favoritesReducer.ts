import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface FavoritesState {
    list: Array<number>,
    characters: Array<Character>,
}

const initialState: FavoritesState = {
    list: [],
    characters: []
}

const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if(favorites) {
        return JSON.parse(favorites)
    }
    return []
}

const toggleFavorite = () => {
    
}

export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async () => {
        const response = getFavorites()
        return response
    }
)

export const fetchToggleFavorite = createAsyncThunk(
    'characters/fetchToggleFavorite',
    async (id: number) => {
        const response = toggleFavorite(id)
        return response
    }
)