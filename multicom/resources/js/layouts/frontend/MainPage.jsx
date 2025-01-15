import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/layout/Footer";
import { ToastContainer } from "react-toastify";

const MainPage = () => {
    return (
        <div className="container mx-auto">
            <ToastContainer />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainPage;