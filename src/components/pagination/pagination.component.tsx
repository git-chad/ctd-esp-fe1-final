import {
  fetchNextCharacters,
  fetchPreviousCharacters,
} from "../../store/characterReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./pagination.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Pagination = () => {
  const { prev, next } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const disableNext = next == null;
  const disablePrev = prev == null;

  const handleNext = () => {
    dispatch(fetchNextCharacters());
  };

  const handlePrev = () => {
    dispatch(fetchPreviousCharacters());
  };

  return (
    <div className="pagination pb-4">
      <button disabled={disablePrev} className={"primary hover:bg-blue-600 transition-colors"} onClick={handlePrev}>
        Previous
      </button>
      <button disabled={disableNext} className={"primary hover:bg-blue-600 transition-colors"} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
