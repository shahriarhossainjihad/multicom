import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import CartDropdown from "./CartDropdown";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    

    return (
        <div className="navbar bg-base-300 rounded-xl px-5 mt-5 shadow-md sticky top-0 z-30">
            <div className="navbar-start">
                <MobileMenu />
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <MenuItems />
            </div>
            <div className="navbar-end">
                <SearchBar />
                <CartDropdown />
                <UserDropdown />
            </div>
        </div>
    );
};

export default Navbar;