import React, { useEffect, useState } from "react";
import Filters from "../components/characters/filter.component";
import CharacterGrid from "../components/characters/character-grid.component";
import Pagination from "../components/pagination/pagination.component";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchCharacters } from "../store/characterReducer";
import { fetchFavoriteCharacters, fetchResetFavorites } from "../store/favoritesReducer";
import FavResetConfirmation from "../components/modals/FavResetConfirmation";

const Homepage = () => {
  const characters = useAppSelector((state) => state.characters.characters);
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleRemoveAllFavorites = () => {
    setShowAlert(true);
  };

  const confirmRemoveAllFavorites = () => {
    dispatch(fetchResetFavorites());
    setShowAlert(false);
  };

  const cancelRemoveAllFavorites = () => {
    setShowAlert(false);
  };

  const isButtonDisabled = useAppSelector((state) => state.favorites.list.length === 0);

  return (
    <div className="container-l">
      <div className="actions">
        <h3 className="text-2xl font-bold">Character Catalog</h3>
        <button
          className="danger hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isButtonDisabled}  
          onClick={handleRemoveAllFavorites}
        >
          Remove all
        </button>
      </div>
      <Filters />
      <Pagination />
      <CharacterGrid characters={characters} />
      <Pagination />
      {showAlert && (
        <FavResetConfirmation
          onConfirm={confirmRemoveAllFavorites}
          onCancel={cancelRemoveAllFavorites}
        />
      )}
    </div>
  );
};

export default Homepage;
