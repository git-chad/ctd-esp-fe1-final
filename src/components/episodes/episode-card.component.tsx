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

const EpisodeCard = ({ episode }: episodeCardProps) => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-[#d0d0d0] p-3 rounded-md flex flex-col"
      >
        <h4 className="font-bold underline">{episode.title}</h4>
        <div className="flex sm:flex-col justify-between">
          <p className="font-bold">{episode.episode}</p>
          <p className="italic">
            <b className="font-semibold">Streamed:</b> {episode.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
