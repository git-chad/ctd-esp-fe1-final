import React from "react";
import { useAppSelector } from "../store/hooks";
import CharacterGrid from "../components/characters/character-grid.component";

/**
 * Página de favoritos. Aquí se mostrarán los personajes marcados como favoritos.
 *
 * @returns la página de favoritos
 */
const Favorites = () => {
  const favoriteCharacters = useAppSelector(
    (state) => state.favorites.favoriteCharacters
  );

  return (
    <div>
      <h1>Favorite Characters</h1>
      <CharacterGrid characters={favoriteCharacters} />
    </div>
  );
};

export default Favorites;
