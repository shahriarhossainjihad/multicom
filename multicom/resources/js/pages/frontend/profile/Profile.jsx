import { useSelector } from "react-redux";
// import { useGetUserQuery } from "../../../redux/features/api/authApiSlice";
import { useOrderByUserQuery } from "../../../redux/features/api/orderApi";

const Profile = () => {
    const user = useSelector((state) => state.authSlice);
    // console.log(user);
    const userId = user?.user?.id;
    console.log(userId);

    const { data, isLoading, error } = useOrderByUserQuery(userId);

    console.log(data);

    return (
        <>
            <section className="relative pt-40 pb-10">
                <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                        <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image"
                            className="border-4 border-solid border-white rounded-full object-cover" />
                    </div>
                    <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                        <div className="block">
                            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">{user?.user?.name ?? ""}</h3>
                            <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Engineer at BB Agency Industry <br className="hidden sm:block" />New
                                York, United States</p>
                        </div>
                        <button
                            className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.3011 8.69881L8.17808 11.8219M8.62402 12.5906L8.79264 12.8819C10.3882 15.6378 11.1859 17.0157 12.2575 16.9066C13.3291 16.7974 13.8326 15.2869 14.8397 12.2658L16.2842 7.93214C17.2041 5.17249 17.6641 3.79266 16.9357 3.0643C16.2073 2.33594 14.8275 2.79588 12.0679 3.71577L7.73416 5.16033C4.71311 6.16735 3.20259 6.67086 3.09342 7.74246C2.98425 8.81406 4.36221 9.61183 7.11813 11.2074L7.40938 11.376C7.79182 11.5974 7.98303 11.7081 8.13747 11.8625C8.29191 12.017 8.40261 12.2082 8.62402 12.5906Z"
                                    stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            <span className="px-2 font-semibold text-base leading-7 text-white">Send Message</span>
                        </button>
                    </div>

                </div>
            </section>


            <section className=" relative mb-20">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-manrope font-extrabold text-3xl lead-10 text-black mb-9">Order History</h2>

                    <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between">
                        <ul className="flex max-sm:flex-col sm:items-center gap-x-14 gap-y-3">
                            <li
                                className="font-medium text-lg leading-8 cursor-pointer text-indigo-600 transition-all duration-500 hover:text-indigo-600">
                                All Order</li>
                            <li
                                className="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                                Summary</li>
                            <li
                                className="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                                Completed</li>
                            <li
                                className="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                                Cancelled</li>
                        </ul>
                        <div className="flex max-sm:flex-col items-center justify-end gap-2 max-lg:mt-5">
                            <div className="flex rounded-full py-3 px-4 border border-gray-300 relative">
                                <svg className="relative " width="18" height="20" viewBox="0 0 18 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                                        stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input type="text" name="from-dt" id="from-dt"
                                    className="font-semibold px-2 text-sm text-gray-900 outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900" placeholder="11-01-2023" />
                            </div>
                            <p className="font-medium text-lg leading-8 text-black">To</p>
                            <div className="flex rounded-full py-3 px-4 border border-gray-300 relative">
                                <svg className="relative " width="18" height="20" viewBox="0 0 18 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                                        stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input type="text" name="to-dt" id="to-dt"
                                    className="font-semibold px-2 text-sm text-gray-900 outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900" placeholder="11-01-2023" />
                            </div>
                        </div>
                    </div>


                    {
                        data?.data.map(order => (
                            <>
                                <div className="mt-7 border border-gray-300 pt-9">
                                    <div className="flex max-md:flex-col items-center justify-between px-3 md:px-11">
                                        <div className="data">
                                            <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">Order : #{order?.invoice_number}</p>
                                            <p className="font-medium text-lg leading-8 text-black mt-3 whitespace-nowrap">Order Payment : {order?.created_at}</p>
                                        </div>
                                        <div className="flex items-center gap-3 max-md:mt-5">
                                            <button
                                                className="rounded-full px-7 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-400">Show
                                                Invoice</button>
                                            {/* <button
                                                className="rounded-full px-7 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">Buy
                                                Now
                                            </button> */}
                                        </div>
                                    </div>
                                    <svg className="my-9 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                                        fill="none">
                                        <path d="M0 1H1216" stroke="#D1D5DB" />
                                    </svg>


                                    {
                                        order?.order_details.map(product => (
                                            <>
                                                <div className="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
                                                    <div className="grid grid-cols-4 w-full">
                                                        <div className="col-span-4 sm:col-span-1">
                                                            <img src="https://pagedone.io/asset/uploads/1705474774.png" alt="" className="max-sm:mx-auto object-cover" />
                                                        </div>
                                                        <div
                                                            className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                                                            <h6 className="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
                                                                Decoration Flower
                                                                port</h6>
                                                            <p className="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">By: Dust
                                                                Studios</p>
                                                            <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                                                                <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">Size:
                                                                    s</span>
                                                                <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">Qty:
                                                                    {product?.quantity ?? 0}</span>
                                                                <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">Price ${product?.unit_price ?? 0}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                                                        <div className="flex flex-col justify-center items-start max-sm:items-center">
                                                            <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                                                Status</p>
                                                            <p className="font-semibold text-lg leading-8 text-green-500 text-left whitespace-nowrap">
                                                                Delivered</p>
                                                        </div>
                                                        <div className="flex flex-col justify-center items-start max-sm:items-center">
                                                            <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                                                                Delivery Expected by</p>
                                                            <p className="font-semibold text-lg leading-8 text-black text-left whitespace-nowrap">23rd March
                                                                2021</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <svg className="my-9 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                                                    fill="none">
                                                    <path d="M0 1H1216" stroke="#D1D5DB" />
                                                </svg>
                                            </>
                                        ))
                                    }

                                    <div className="px-3 md:px-11 flex items-center justify-between max-sm:flex-col-reverse">
                                        <div className="flex max-sm:flex-col-reverse items-center">
                                            <button
                                                className="flex items-center gap-3 py-10 pr-8 sm:border-r border-gray-300 font-normal text-xl leading-8 text-gray-500 group transition-all duration-500 hover:text-indigo-600">
                                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path className="stroke-gray-600 transition-all duration-500 group-hover:stroke-indigo-600"
                                                        d="M14.0261 14.7259L25.5755 26.2753M14.0261 26.2753L25.5755 14.7259" stroke=""
                                                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                cancel order
                                            </button>
                                            <p className="font-normal text-xl leading-8 text-gray-500 sm:pl-8">Payment Is Succesfull</p>
                                        </div>
                                        <p className="font-medium text-xl leading-8 text-black max-sm:py-4"> <span className="text-gray-500">Total
                                            Price: </span> &nbsp;${order?.total_price ?? 0}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </section>



        </>

    );
};

export default Profile;