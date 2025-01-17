import CartItem from "../../../../components/data-display/CartItem";

const CartItems = () => {
    return (
        <div
            className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-5">
                    <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <div className="grid grid-cols-6">
                        <div className="col-span-3">
                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                        </div>
                        <div className="col-span-2">
                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                        </div>
                        <div className="col-span-1">
                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Action</p>
                        </div>
                    </div>
                </div>
            </div>
            <CartItem />
        </div>
    );
};

export default CartItems;