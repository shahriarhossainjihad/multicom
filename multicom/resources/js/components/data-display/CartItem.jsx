import Swal from "sweetalert2";
import defaultImage from '../../assets/img/product.jpg';
import useCart from '../../hooks/useCat';

const CartItem = ({ product }) => {
    const { name, category, price, image, quantity, } = product;
    // console.log(product);

    const { addProduct, removeProduct, updateByOne } = useCart();
    // Handle Add to Cart logic
    const handleAddToCart = () => {
        addProduct(product);
    };
    const handleUpdateCart = () => {
        updateByOne(product);
    };

    const handleRemoveFromCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to remove this item from the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeProduct(product);
                Swal.fire("Removed!", "The product has been removed.", "success");
            }
        });
    }



    return (
        <div
            className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
            <div className="w-full md:max-w-[126px]">
                <img src={defaultImage} alt={name ?? ""}
                    className="mx-auto rounded-xl object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 w-full">
                <div className="md:col-span-2">
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">{name ?? ""}</h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">{category ?? ""}</h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">${price ?? 0}</h6>
                    </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                    <div className="flex items-center h-full">
                        <button
                            className="group rounded-l-xl px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                            onClick={handleUpdateCart}
                        >
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                viewBox="0 0 22 22" fill="none">
                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                        <input
                            type="number"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-sm w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[9px] text-center bg-transparent"
                            placeholder="1"
                            value={quantity}
                        />
                        <button
                            className="group rounded-r-xl px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                            onClick={handleAddToCart}
                        >
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                viewBox="0 0 22 22" fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                    stroke-width="1.6" stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                    stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                    <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">${price * quantity}</p>
                </div>
                <div className="flex items-center justify-start mt-5 md:mt-0 md:justify-end">
                    <button
                        className="rounded-full flex items-center justify-center focus-within:outline-red-500 hover:bg-red-400 transition-all duration-500"
                        onClick={handleRemoveFromCart}
                    >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="fill-red-50 transition-all duration-500 hover:fill-red-400" cx="17" cy="17" r="17" />
                            <path className="stroke-red-500 transition-all duration-500 hover:stroke-white"
                                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;