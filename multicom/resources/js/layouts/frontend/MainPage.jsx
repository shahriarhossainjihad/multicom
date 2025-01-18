import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../../redux/slice/authSlice";

const MainPage = () => {
    // const isAuthenticated = useSelector((state) => state.authSlice);
    // console.log(isAuthenticated);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(checkAuth());
    //     // console.log(checkAuth());
    // }, [dispatch]);
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainPage;