import "./Details.css";
import FavButton from "../components/buttons/fav-button.component";
import EpisodeCard from "../components/episodes/episode-card.component";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import { fetchToggleFavorite } from "../store/favoritesReducer";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <DetailsPage /> ```
 *
 * @returns la pagina de detalle
 */
const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const { character, episodes, isLoading } = useAppSelector(
    (state) => state.details
  );

  const onClickFav = () => {
    dispatch(fetchToggleFavorite(character.id));
  };

  if (character.id === -1) {
    return (
      <div className="container">
        <p className="text-xl italic font-bold opacity-50">
          Select a character to see their details
        </p>
        <Link to="/">
          <p className="text-md underline underline-offset-2 opacity-50 hover:text-[#076eed] transition-colors">
            Head back to the homepage
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div className="container text-black">
      <h3>{character.name}</h3>
      <div className="details">
        <div className="details-header">
          <img src={character.img} alt={character.name} />
          <div className="details-header-text">
            <p>{character.name}</p>
            <p>
              <b>Planet: </b>
              {character.planet}
            </p>
            <p>
              <b>Gender: </b>
              {character.gender}
            </p>
          </div>
          <FavButton
            onClick={onClickFav}
            isFavorite={favorites.list.includes(character.id)}
          />
        </div>
      </div>
      <h4>Appears in:</h4>
      <div className="episodes-grid">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          episodes?.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
