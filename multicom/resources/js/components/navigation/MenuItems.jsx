import { Link } from "react-router-dom";

const MenuItems = () => {
    return (
        <ul className="menu menu-horizontal px-1 z-20">
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <details>
                    <summary>Category</summary>
                    <ul className="p-2 w-[200px]">
                        <li>
                            <a>Category 1</a>
                        </li>
                        <li>
                            <a>Category 2</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li><Link to="/brnds">Brand</Link></li>
            <li><Link to="/vendor">Vendor</Link></li>
        </ul>
    );
};

export default MenuItems;