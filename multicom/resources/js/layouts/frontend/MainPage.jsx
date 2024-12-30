import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/layout/Footer";

const MainPage = () => {
    return (
        <div className="container mx-auto">
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainPage;