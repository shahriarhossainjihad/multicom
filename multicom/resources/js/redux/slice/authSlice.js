import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookies";

const initialState = {
    isAuthenticated: false,
    user: null,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            setCookie('user-token', action.payload.token, 30);
            localStorage.setItem("user-info", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            deleteCookie('user-token');
            localStorage.removeItem('user-info');
        },
        checkAuth: (state) => {
            const token = getCookie('user-token');
            // console.log(token);
            if (token) {
                state.isAuthenticated = true;
                if (!state.user) {
                    state.user = {}; // Initialize `state.user` as an empty object if it's null
                }
                state.user.token = token;
                let currentUser = JSON.parse(localStorage.getItem('user-info'));
                state.user.id = currentUser.id
            }
        },
    }
})

export const { setAuth, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;