import FavButton from '../buttons/fav-button.component';
import './character-card.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = () => {

    return <div className="character-card">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
        <div className="character-card-body">
            <span>Rick Sanchez</span>
            <FavButton isFavorite={false} onClick={onclick}/>
        </div>
    </div>
}

export default TarjetaPersonaje;