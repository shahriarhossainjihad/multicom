import useCart from "./useCat";

const cartCalculation = () => {
    const cart = useCart();
    // console.log(cart.cart);

    // Calculate the total stock multiplied by quantity for each product
    const totalProductStockValue = cart.cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    return totalProductStockValue;
}

export default cartCalculation;