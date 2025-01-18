import defaultImage from '../../assets/img/product.jpg';

const CheckoutItem = ({ product }) => {
    const { name, price, image, quantity, } = product;
    return (
        <div className="flex justify-start items-center gap-5">
            <div className="w-full md:max-w-[80px]">
                <img src={defaultImage} alt={name ?? "image"}
                    className="mx-auto rounded-xl object-cover" />
            </div>
            <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold leading-7 text-lg text-black">{name ?? ""}</h6>
                <h6 className="font-medium text-sm leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">${price} X {quantity} = ${price * quantity}</h6>
            </div>
        </div>
    );
};

export default CheckoutItem;