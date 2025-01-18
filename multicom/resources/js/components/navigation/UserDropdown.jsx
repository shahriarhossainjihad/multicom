import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDropdown = () => {
    const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated);
    // console.log(isAuthenticated);
    return (
        <>
            {
                isAuthenticated ?
                    <div className="dropdown dropdown-end z-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/user-profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" className="justify-between">
                                    Settings
                                </Link>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <Link to="/sign-in" className="btn">Login</Link>
            }
        </>
    );
};

export default UserDropdown;