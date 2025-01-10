import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/frontend/MainPage";
import HomePage from "../pages/frontend/homepage/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            }
        ]
    },
    {
        path: '/sign-in',
        element: <Login/>
    },
    {
        path: '/sign-up',
        element: <Register/>
    },
])