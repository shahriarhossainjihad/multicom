import { Link } from "react-router-dom";
import useCart from "../../../../hooks/useCat";

const CartInfo = () => {
    const cart = useCart();
    // console.log(cart.cart);

    // Calculate the total stock multiplied by quantity for each product
    const totalProductStockValue = cart.cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    return (
        <div
            className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Cart Summary</h2>
            <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-w-full max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">${totalProductStockValue ?? 0}</h6>
                    </div>
                    {/* <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
                    </div> */}
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${totalProductStockValue ?? 0}</h6>
                    </div>
                </div>
                <Link
                    to="/checkout"
                    className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default CartInfo;