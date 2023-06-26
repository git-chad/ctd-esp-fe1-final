import { configureStore} from "@reduxjs/toolkit";
import characterReducer from "./characterReducer";


// import reducers 


const store = configureStore({
   reducer: {
    // put reducers here
    characters: characterReducer,
    
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;