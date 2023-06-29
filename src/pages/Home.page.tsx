import React, { useEffect, useState } from "react";
import Filters from "../components/characters/filter.component";
import CharacterGrid from "../components/characters/character-grid.component";
import Pagination from "../components/pagination/pagination.component";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchCharacters } from "../store/characterReducer";
import {fetchFavoriteCharacters, fetchResetFavorites,} from "../store/favoritesReducer";
import FavResetConfirmation from "../components/modals/FavResetConfirmation";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Homepage = () => {
  const characters = useAppSelector((state) => state.characters.characters);
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleRemoveAllFavorites = () => {
    setShowAlert(true);
  };

  const confirmRemoveAllFavorites = () => {
    dispatch(fetchResetFavorites());
    setShowAlert(false);
  };

  const cancelRemoveAllFavorites = () => {
    setShowAlert(false);
  };

  const isButtonDisabled = useAppSelector(
    (state) => state.favorites.list.length === 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTop = window.scrollY;
      const showButton = scrollToTop > 400; // Show button when scrolled 200 pixels or more
      setShowScrollButton(showButton);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className="container-l">
      <div className="actions">
        <h3 className="text-2xl font-bold">Character Catalog</h3>
        <button
          className="danger hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isButtonDisabled}
          onClick={handleRemoveAllFavorites}
        >
          Remove all
        </button>
      </div>
      <Filters />
      <Pagination />
      <CharacterGrid characters={characters} />
      <Pagination />
      {showAlert && (
        <FavResetConfirmation
          onConfirm={confirmRemoveAllFavorites}
          onCancel={cancelRemoveAllFavorites}
        />
      )}
      {showScrollButton && (
        <button
        className="fixed bottom-4 right-4 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      )}
    </div>
  );
};

export default Homepage;
