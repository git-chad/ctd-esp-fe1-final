import { configureStore} from "@reduxjs/toolkit";
import characterReducer from "./characterReducer";
import favoritesReducer from "./favoritesReducer";
import detailsReducer from "./detailsReducer";

// import reducers 


const store = configureStore({
   reducer: {
    // put reducers here
    characters: characterReducer,
    favorites: favoritesReducer,
    details: detailsReducer
    
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;