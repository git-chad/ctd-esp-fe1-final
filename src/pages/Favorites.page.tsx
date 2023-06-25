import CharacterGrid from "../components/characters/character-grid.component";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <FavoritesPage /> ```
 * 
 * @returns la pagina de favoritos
 */
const FavoritesPage = () => {
    return <div className="container">
        <div className="actions">
            <h3>Favorite characters</h3>
            <button className="danger">Test Button</button>
        </div>
        <CharacterGrid />
    </div>
}

export default FavoritesPage 