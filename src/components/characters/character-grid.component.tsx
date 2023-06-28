import "./character-grid.css";
import CharacterCard from "./character-card.component";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */

interface CharacterGridProps {
  characters: Array<Character>;
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
  return (
    <div className="character-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10">
      {characters.map((character) => {
        return (
          <>
              <CharacterCard key={character.id} character={character} />         
          </>
        );
      })}
    </div>
  );
};

export default CharacterGrid;
