import CartInfo from "./section/CartInfo";
import CartItems from "./section/CartItems";

const CartPage = () => {
    return (
        <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                <div className="grid grid-cols-12">
                    <CartItems />
                    <CartInfo />
                </div>
            </div>
        </section>
    );
};

export default CartPage;