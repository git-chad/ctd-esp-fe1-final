import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CharacterGrid from "../components/characters/character-grid.component";
import {
  fetchResetFavorites,
  fetchFavoriteCharacters,
} from "../store/favoritesReducer";
import FavResetConfirmation from "../components/modals/FavResetConfirmation";
import { Link } from "react-router-dom";

/**
 * Página de favoritos. Aquí se mostrarán los personajes marcados como favoritos.
 *
 * @returns la página de favoritos
 */
const Favorites = () => {
  const favoriteCharacters = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchFavoriteCharacters());
  }, [dispatch]);

  // Check that only favorites are rendered
  const filteredCharacters = favoriteCharacters.characters.filter((character) =>
    favoriteCharacters.list.includes(character.id)
  );

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

  return (
    <div className="container-l">
      <div className="actions mb-5">
        <h1 className="text-2xl font-bold">Favorite Characters</h1>
        {filteredCharacters.length > 0 && ( 
          <button
            className="danger hover:bg-red-700 transition-colors"
            onClick={handleRemoveAllFavorites}
          >
            Remove all
          </button>
        )}
      </div>
      {filteredCharacters.length > 0 ? ( 
        <CharacterGrid characters={filteredCharacters} />
      ) : (
        <>
          <div className="flex flex-col h-[70vh] items-center justify-center">
            <p className="text-xl italic font-bold opacity-50">
              You haven't selected any characters
            </p>
            <Link to="/">
              <p className="text-md underline underline-offset-2 opacity-50 hover:text-[#076eed] transition-colors">
                You can favorite characters from here
              </p>
            </Link>
          </div>
        </>
      )}

      {showAlert && ( 
        <FavResetConfirmation
          onConfirm={confirmRemoveAllFavorites}
          onCancel={cancelRemoveAllFavorites}
        />
      )}
    </div>
  );
};

export default Favorites;
