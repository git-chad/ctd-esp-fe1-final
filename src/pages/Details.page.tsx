import "./Details.css";
import FavButton from "../components/buttons/fav-button.component";
import EpisodeCard from "../components/episodes/episode-card.component";

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
    return <div className="container">
        {/* <h3>Rick Sanchez</h3>
        <div className={"details"}>
            <div className={"details-header"}>
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
                <div className={"details-header-text"}>

                    <p>Rick Sanchez</p>
                    <p>Planeta: Earth</p>
                    <p>Genero: Male</p>
                </div>
                <FavButton 
                isFavorite={false}
                onClick={() => {}} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodes-grid"}>
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
        </div> */}
    </div>
}

export default DetailsPage