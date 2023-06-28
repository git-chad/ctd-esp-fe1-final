
import FavButton from "../components/buttons/fav-button.component";
import EpisodeCard from "../components/episodes/episode-card.component";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import { fetchToggleFavorite } from "../store/favoritesReducer";
import { useEffect } from "react";
import { fetchEpisodes } from "../store/detailsReducer";

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

  useEffect(() => {
    if (character.id !== -1) {
      dispatch(fetchEpisodes(character.id));
    }
  }, [dispatch, character.id]);

  if (character.id === -1) {
    return (
      <div className="container-l">
        <h1 className="text-2xl font-bold mb-5">Character Details</h1>
        <div className="text-black flex flex-col h-[70vh] items-center justify-center">
          <p className="text-xl italic font-bold opacity-50">
            Select a character to see their details
          </p>
          <Link to="/">
            <p className="text-md underline underline-offset-2 opacity-50 hover:text-[#076eed] transition-colors">
              Head back to the homepage
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-l">
      <h1 className="text-2xl font-bold mb-5">Character Details</h1>
      <div className="details">
        <div className="details-header flex flex-col sm:flex-row justify-between">
          <img src={character.img} alt={character.name} />
          <div className="details-header-text sm:ml-4 mt-4 sm:mt-0 mb-4">
            <p className="text-3xl font-bold mb-4">{character.name}</p>
            <p className="text-xl">
              <b>Planet: </b>
              {character.planet}
            </p>
            <p className="text-xl">
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
      <div className="container-l">
        <h4 className="text-2xl font-bold mb-5">Appears in:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            episodes?.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
