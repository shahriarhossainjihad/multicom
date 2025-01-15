import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../../utils/localStorage";




const cartSlice = createSlice({
    name: "cart",
    initialState: { list: loadCartFromLocalStorage() },
    reducers: {
        addToCart(state, action) {
            const index = state.list.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                if (state.list[index].quantity < action.payload.stock) {
                    state.list[index].quantity += 1;
                    toast.success("Product added in Cart Successfully");
                } else {
                    toast.error("Stock Out! Cannot add more of this product.");
                }
            } else {
                state.list.push({ ...action.payload, quantity: 1 });
            }
            saveCartToLocalStorage(state.list); // Save updated cart
        },
        updateCart(state, action) {
            const index = state.list.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                if (state.list[index].quantity > 1) {
                    state.list[index].quantity -= 1;
                } else {
                    toast.error("Quantity cannot be less than 1!"); // Toastr মেসেজ
                }
            }
            saveCartToLocalStorage(state.list);
        },
        removeFromCart(state, action) {
            state.list = state.list.filter(product => product.id !== action.payload.id);
            saveCartToLocalStorage(state.list); // Save updated cart
        },
    },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
