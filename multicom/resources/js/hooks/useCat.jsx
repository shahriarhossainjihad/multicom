import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateCart } from "../redux/slice/cartSlice";

const useCart = () => {
    const cart = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();

    const addProduct = (product) => dispatch(addToCart(product));
    const updateByOne = (product) => dispatch(updateCart(product));
    const removeProduct = (product) => dispatch(removeFromCart(product));

    return { cart, addProduct, removeProduct,updateByOne };
};

export default useCart;