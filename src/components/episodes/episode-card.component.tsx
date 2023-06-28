import './episode-card.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */

interface episodeCardProps {
    episode: Episode;
}

const EpisodeCard = ({episode} : episodeCardProps) => {

    return <div className="episode-card">
            <h4>{episode.title}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Streamed: {episode.date}</span>
            </div>
    </div>
}

export default EpisodeCard;