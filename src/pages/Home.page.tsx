import React, { useEffect } from "react";
import Filters from "../components/characters/filter.component";
import CharacterGrid from "../components/characters/character-grid.component";
import Pagination from "../components/pagination/pagination.component";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchCharacters } from "../store/characterReducer";

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
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filters />
      <Pagination />
      <CharacterGrid characters={characters} />
      <Pagination />
    </div>
  );
};

export default Homepage;
