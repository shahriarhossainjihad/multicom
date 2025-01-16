import { configureStore } from "@reduxjs/toolkit";
import productsApiSlice from "./features/api/productsApiSlice";
import cartReducer from "./slice/cartSlice";
import authReducer from "./slice/authSlice";
import authApiSlice from "./features/api/authApiSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        authSlice: authReducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApiSlice.middleware).concat(authApiSlice.middleware),
});

export default store;
