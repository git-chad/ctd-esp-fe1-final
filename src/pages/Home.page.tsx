import React, { useEffect } from "react";
import Filters from "../components/characters/filter.component";
import CharacterGrid from "../components/characters/character-grid.component";
import Pagination from "../components/pagination/pagination.component";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchCharacters } from "../store/characterReducer";
import { fetchResetFavorites } from "../store/favoritesReducer";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const Homepage = () => {
  const characters = useAppSelector((state) => state.characters.characters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="container-l">
      <div className="actions">
        <h3 className="text-2xl font-bold">Character Catalog</h3>
        <button className="danger hover:bg-red-700 transition-colors" onClick={() => dispatch(fetchResetFavorites())}>Remove all</button>
      </div>
      <Filters />
      <Pagination />
      <CharacterGrid characters={characters} />
      <Pagination />
    </div>
  );
};

export default Homepage;
