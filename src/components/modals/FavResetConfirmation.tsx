import { fetchResetFavorites } from "../../store/favoritesReducer";

const FavResetConfirmation = ({onConfirm, onCancel}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000080]">
      <div className="bg-white rounded-md p-8 shadow-xl">
        <h2 className="text-xl font-bold mb-5">Remove all favorites</h2>
        <p className="mb-5">
          This will remove all favorites. Do you wish to proceed?
        </p>
        <div className="flex justify-between">
          <button
            className="bg-[#8d2020] hover:bg-red-700 
            transition-colors text-white 
            font-bold py-2 px-4 rounded-md"
            onClick={onConfirm}
          >
            Proceed
          </button>
          <button
            className="bg-[#d0d0d0] hover:bg-[#A8ADAA]
            transition-colors text-[#727975]
            font-bold py-2 px-4 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavResetConfirmation;
