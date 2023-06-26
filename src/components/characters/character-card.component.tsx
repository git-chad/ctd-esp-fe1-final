import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FavButton from "../buttons/fav-button.component";
import "./character-card.css";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

interface characterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: characterCardProps) => {
  const favoritesState = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickFav = () => {
    // must manage fav button func
    console.log("added to favorites");
    
  }

  const onClickCard = () => {
    // must set character details later
    navigate('/details');
    console.log("opened on details tab");
    
  }

  return (
    <div className="character-card">
      <img
        src={character.img}
        alt={character.name}
        onClick={onClickCard}
      />
      <div className="character-card-body">
        <span>{character.name}</span>
        <FavButton isFavorite={false} onClick={onClickFav} />
      </div>
    </div>
  );
};

export default CharacterCard;
