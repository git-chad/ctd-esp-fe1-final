import './pagination.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Pagination = () => {

    return <div className="pagination">
        <button disabled={true} className={"primary"}>Previous</button>
        <button disabled={false} className={"primary"}>Next</button>
    </div>
}

export default Pagination;