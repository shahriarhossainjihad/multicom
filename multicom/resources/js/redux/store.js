import { configureStore } from "@reduxjs/toolkit";
import productsApiSlice from "./features/api/productsApiSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApiSlice.middleware),
});

export default store;
