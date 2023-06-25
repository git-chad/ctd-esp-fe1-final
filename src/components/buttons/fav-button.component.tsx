import './fav-button.css';

interface FavButtonProps {
    isFavorite: boolean;
    onClick: () => void;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({isFavorite, onClick}: FavButtonProps) => {
    const src = isFavorite ? "img1" : "img2"

    return <div onClick={onClick} className="fav-button">
        <img src={src} alt={"favorite"} />
    </div>
}

export default BotonFavorito;