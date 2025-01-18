import { Link } from "react-router-dom";

const MobileMenu = () => {
    return (
        <div className="dropdown z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/category">Category</Link>
                    <ul className="p-2">
                        <li>
                            <a>Category 1</a>
                        </li>
                        <li>
                            <a>Category 2</a>
                        </li>
                    </ul>
                </li>
                <li><Link to="/brnds">Brand</Link></li>
            </ul>
        </div>
    );
};

export default MobileMenu;