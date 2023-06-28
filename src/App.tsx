import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home.page';
import Favorites from './pages/Favorites.page';
import Details from './pages/Details.page';
import Navbar from './components/layout/navbar.component';
import { useAppDispatch } from './store/hooks';
import { fetchFavorites, fetchResetFavorites } from './store/favoritesReducer';
import FavResetConfirmation from './components/modals/FavResetConfirmation';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

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
