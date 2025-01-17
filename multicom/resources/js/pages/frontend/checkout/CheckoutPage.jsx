const CheckoutPage = () => {
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
            <div className="my-5 flex md:justify-end justify-center items-start">
                <div className="rounded-lg bg-gray-50 w-full px-5 py-5">
                    <h4>Order Summary</h4>
                    <div className="grid gap-5 my-5 max-h-[200px] overflow-y-scroll">
                        <div className="flex justify-start items-center gap-5">
                            <div className="w-full md:max-w-[80px]">
                                <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image"
                                    className="mx-auto rounded-xl object-cover" />
                            </div>
                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                <h6 className="font-semibold leading-7 text-lg text-black">Rose Petals Divine</h6>
                                <h6 className="font-medium text-sm leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00 X 3 = $360.00</h6>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <div className="w-full md:max-w-[80px]">
                                <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image"
                                    className="mx-auto rounded-xl object-cover" />
                            </div>
                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                <h6 className="font-semibold leading-7 text-lg text-black">Rose Petals Divine</h6>
                                <h6 className="font-medium text-sm leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00 X 3 = $360.00</h6>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <div className="w-full md:max-w-[80px]">
                                <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image"
                                    className="mx-auto rounded-xl object-cover" />
                            </div>
                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                <h6 className="font-semibold leading-7 text-lg text-black">Rose Petals Divine</h6>
                                <h6 className="font-medium text-sm leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00 X 3 = $360.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="w-full mb-8 max-w-full max-lg:mx-auto">
                            <div className="flex items-center justify-between w-full mb-6">
                                <p className="font-normal text-lg leading-8 text-gray-400">Sub Total</p>
                                <h6 className="font-semibold text-lg leading-8 text-gray-900">$360.00</h6>
                            </div>
                            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                                <p className="font-normal text-lg leading-8 text-gray-400">Delivery Charge</p>
                                <h6 className="font-semibold text-lg leading-8 text-gray-900">$45.00</h6>
                            </div>
                            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                                <p className="font-normal text-lg leading-8 text-gray-400">Discount</p>
                                <h6 className="font-semibold text-lg leading-8 text-gray-900">$45.00</h6>
                            </div>
                            <div className="flex items-center justify-between w-full py-6">
                                <p className="font-manrope font-medium text-xl leading-9 text-gray-900">Total</p>
                                <h6 className="font-manrope font-medium text-xl leading-9 text-indigo-500">$405.00</h6>
                            </div>
                        </div>
                        <button
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