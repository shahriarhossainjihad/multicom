import { useSelector } from "react-redux";
import CheckoutItem from "../../../components/data-display/CheckoutItem";
import useCart from "../../../hooks/useCat";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {

    const {cart, cartDestroy} = useCart();
    // console.log(cart.cart);

    // Calculate the total stock multiplied by quantity for each product
    const totalProductStockValue = cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    // const user = useSelector((state) => state.authSlice);
    // // console.log(user);
    const navigate = useNavigate()

    const handlePlaceOrder = () => {
        cartDestroy();
        navigate('/');
    }


    return (
        <div className="grid md:grid-cols-3 gap-10">
            <div className=" my-5 p-5 col-span-2">
                <h4 className="font-bold text-xl">Shipping Information</h4>
                <form className="grid gap-3 my-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Full Name</span>
                        </div>
                        <input type="text" placeholder="Type Full Name" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email Address</span>
                        </div>
                        <input type="email" placeholder="example@gmail.com" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Phone Number</span>
                        </div>
                        <input type="tel" placeholder="+880 183....." className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Full Address</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24 resize-none" placeholder="Full Address"></textarea>
                    </label>
                </form>

                <h5>Select Payment Option</h5>
                <div className="flex justify-center items-center gap-10 bg-gray-50 my-5 py-3">
                    <div className="form-control">
                        <label className="label cursor-pointer grid place-items-center gap-5 py-5 px-5">
                            <span className="label-text">Cash On Delivery</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-green-500" defaultChecked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer grid place-items-center gap-5 py-5 px-5">
                            <span className="label-text">Bkash</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-green-500" defaultChecked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer grid place-items-center gap-5 py-5 px-5">
                            <span className="label-text">Rocket</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-green-500" defaultChecked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer grid place-items-center gap-5 py-5 px-5">
                            <span className="label-text">Card</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-green-500" defaultChecked />
                        </label>
                    </div>
                </div>
            </div>
            <div className="my-5 flex md:justify-end justify-center items-start w-full">
                <div className="rounded-lg bg-gray-50 w-full px-5 py-5">
                    <h4>Order Summary</h4>
                    <div className="grid gap-5 my-5 max-h-[200px] overflow-y-scroll">
                        {
                            cart.map((product) => <CheckoutItem key={product.id} product={product} />)
                        }
                    </div>
                    <div className="mt-8">
                        <div className="w-full mb-8 max-w-full max-lg:mx-auto">
                            <div className="flex items-center justify-between w-full mb-6">
                                <p className="font-normal text-lg leading-8 text-gray-400">Sub Total</p>
                                <h6 className="font-semibold text-lg leading-8 text-gray-900">${totalProductStockValue.toFixed(2) ?? 0}</h6>
                            </div>
                            {/* <div className="flex gap-1 items-start mb-6 text-yellow-300">
                                <p className=" font-normal text-xs italic">Note:</p>
                                <p className=" font-normal text-xs italic">If you purchases a single item, the delivery charge is $45. For multiple items, an additional charge of $10 will be applied for each extra product.</p>
                            </div> */}
                            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                                <p className="font-normal text-lg leading-8 text-gray-400">Delivery Charge</p>
                                <h6 className="font-semibold text-lg leading-8 text-gray-900">$00.00</h6>
                            </div>
                            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                                <p className="font-normal text-lg leading-8 text-gray-400">Discount</p>
                                <h6 className="font-semibold text-lg leading-8 text-gray-900">$00.00</h6>
                            </div>
                            <div className="flex items-center justify-between w-full py-6">
                                <p className="font-manrope font-medium text-xl leading-9 text-gray-900">Total</p>
                                <h6 className="font-manrope font-medium text-xl leading-9 text-indigo-500">${totalProductStockValue.toFixed(2) ?? 0}</h6>
                            </div>
                        </div>
                        <button
                            onClick={handlePlaceOrder}
                            className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;