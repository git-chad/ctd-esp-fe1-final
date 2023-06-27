import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Home.page";
import Favorites from "./pages/Favorites.page";
import Details from "./pages/Details.page";
import Navbar from "./components/layout/navbar.component";
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchFavoriteCharacters, fetchFavorites } from './store/favoritesReducer';

function App() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites)

  useEffect(() => {
    dispatch(fetchFavorites())
  }, [])

  useEffect(() => {
    dispatch(fetchFavoriteCharacters())
  }, [favorites.list])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
