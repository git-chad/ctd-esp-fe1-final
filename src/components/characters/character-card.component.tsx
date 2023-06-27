import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FavButton from "../buttons/fav-button.component";
import "./character-card.css";
import { fetchToggleFavorite } from "../../store/favoritesReducer";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const favoritesState = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [hasAnimated, setHasAnimated] = useState(false);

  const onClickFav = () => {
    dispatch(fetchToggleFavorite(character.id));
  };

  const onClickCard = () => {
    navigate("/details");
    console.log("opened on details tab");
  };

  const isFav =
    Array.isArray(favoritesState.list) &&
    favoritesState.list.includes(character.id);

  // console.log(character.name);

  // useEffect(() => {
  //   const hasAnimatedBefore = localStorage.getItem("hasAnimated");

  //   if (!hasAnimatedBefore) {
  //     setHasAnimated(true);
  //     localStorage.setItem("hasAnimated", "true");
  //   }
  // }, []);

  return (
    <Fade bottom>
      <div className="character-card">
        <img src={character.img} alt={character.name} onClick={onClickCard} />
        <div className="character-card-body">
          <span>{character.name}</span>
          <FavButton isFavorite={isFav} onClick={onClickFav} />
        </div>
      </div>
    </Fade>
  );
};

export default CharacterCard;
