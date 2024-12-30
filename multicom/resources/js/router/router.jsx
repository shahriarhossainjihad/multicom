import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/frontend/MainPage";
import HomePage from "../pages/frontend/homepage/HomePage";

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
    }
])