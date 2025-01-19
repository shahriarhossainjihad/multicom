import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/frontend/MainPage";
import HomePage from "../pages/frontend/homepage/HomePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/frontend/profile/Profile";
import PrivateRoute from "../provider/PrivateRouter";
import CartPage from "../pages/frontend/cart-page/CartPage";
import CheckoutPage from "../pages/frontend/checkout/CheckoutPage";
import ProductPage from "../pages/frontend/products/ProductPage";
import VendorPage from "../pages/frontend/vendor/VendorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path: '/checkout',
                element: <CheckoutPage />
            },
            {
                path: '/products',
                element: <ProductPage />
            },
            {
                path: '/vendor',
                element: <VendorPage />
            },
            {
                path: '/user-profile',
                element: <PrivateRoute />, // Protecting the route
                children: [
                    {
                        path: '/user-profile',
                        element: <Profile />
                    }
                ]
            }

        ]
    },
    {
        path: '/sign-in',
        element: <Login />
    },
    {
        path: '/sign-up',
        element: <Register />
    },
])