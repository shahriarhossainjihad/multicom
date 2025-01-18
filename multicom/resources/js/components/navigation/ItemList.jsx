const ItemList = () => {
    return (
        <>
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
        </>
    );
};

export default ItemList;