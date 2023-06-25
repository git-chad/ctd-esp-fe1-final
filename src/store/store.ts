import { configureStore} from "@reduxjs/toolkit";

// import reducers 


const store = configureStore({
   reducer: {
    // put reducers here
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;