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
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterGrid;
