import './character-grid.css';
import CharacterCard from './character-card.component';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const CharacterGrid = () => {

    return <div className="character-grid">
       <CharacterCard />
       <CharacterCard />
       <CharacterCard />
    </div>
}
 
export default CharacterGrid;