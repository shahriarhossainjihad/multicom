import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookies";

const initialState = {
    isAuthenticated: false,
    token: null,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
        checkAuth: (state) => {
            const token = getCookie('user-token');
            if (token) {
                state.isAuthenticated = true;
                state.token = token;
            }
        },
    }
})

export const { setAuth, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;