import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home.page';
import Favorites from './pages/Favorites.page';
import Details from './pages/Details.page';
import Navbar from './components/layout/navbar.component';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchFavorites, fetchResetFavorites } from './store/favoritesReducer';
import FavResetConfirmation from './components/modals/FavResetConfirmation';
import { fetchEpisodes } from './store/detailsReducer';

function App() {
  const dispatch = useAppDispatch();
  const details = useAppSelector(state => state.details)

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    if(details.character.id !== -1) {
      dispatch(fetchEpisodes())
    }
  }, [details.character, dispatch])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              
            />
          }
        />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
