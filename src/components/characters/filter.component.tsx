import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import "./filter.css";
import {
  fetchFilteredCharacters,
  setFilter,
  resetFilter,
} from "../../store/characterReducer";

const Filter = () => {
  const filter = useAppSelector((state) => state.characters.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filter !== undefined) {
      dispatch(fetchFilteredCharacters(filter));
    }
  }, [filter]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <div className="filters pt-2 pb-2">
      <label htmlFor="name">Filter by character name:</label>
      <input
        onChange={onChange}
        value={filter}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="name"
      />
      <button className="underline font-semibold italic w-[100px] self-center" onClick={handleResetFilter}>Clean filter</button>
    </div>
  );
};

export default Filter;
