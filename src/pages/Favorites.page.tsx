import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CharacterGrid from "../components/characters/character-grid.component";
import { fetchResetFavorites, fetchFavoriteCharacters } from "../store/favoritesReducer";

/**
 * Página de favoritos. Aquí se mostrarán los personajes marcados como favoritos.
 *
 * @returns la página de favoritos
 */
const Favorites = () => {
  const favoriteCharacters = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteCharacters()); 
  }, [dispatch]);

  // Check that only favorites are rendered
  const filteredCharacters = favoriteCharacters.characters.filter((character) =>
    favoriteCharacters.list.includes(character.id)
  );

  return (
    <div>
      <div>
        <h1>Favorite Characters</h1>
        <button onClick={() => dispatch(fetchResetFavorites())}>Remove all</button>
      </div>
      <CharacterGrid characters={filteredCharacters} />
    </div>
  );
};

export default Favorites;
