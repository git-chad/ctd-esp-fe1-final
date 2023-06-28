import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FavButton from "../buttons/fav-button.component";
import "./character-card.css";
import { fetchToggleFavorite } from "../../store/favoritesReducer";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { setDetails } from "../../store/detailsReducer";

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
    dispatch(setDetails(character))
    navigate("/details");
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
    
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="character-card">
        <img src={character.img} alt={character.name} onClick={onClickCard} />
        <div className="character-card-body">
          <span>{character.name}</span>
          <FavButton isFavorite={isFav} onClick={onClickFav} />
        </div>
      </motion.div>
    
  );
};

export default CharacterCard;
