import filledStar from '../../imgs/star-filled.png';
import star from '../../imgs/star.png'

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

interface FavButtonProps {
    isFavorite: boolean;
    onClick: () => void;
}


const FavButton = ({isFavorite, onClick}: FavButtonProps) => {
    const src = isFavorite ? filledStar : star;

    return <div onClick={onClick} className="fav-button  hover:filter-drop-shadow-yellow">
        <img className=" w-6 h-6 cursor-pointer" src={src} alt={"favorite"} />
    </div>
}

export default FavButton;