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

const EpisodeCard = () => {

    return <div className="episode-card">
            <h4>Close Rick-counters of the Rick Kind</h4>
            <div>
                <span>S01E01</span>
                <span>Launched: April 7, 2014</span>
            </div>
    </div>
}

export default EpisodeCard;