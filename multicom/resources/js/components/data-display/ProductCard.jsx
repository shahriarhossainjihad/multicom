import { Icon } from '@iconify/react/dist/iconify.js';
import defaultImage from '../../assets/img/product.jpg';
import Badge from '../Badge';
import useCart from '../../hooks/useCat';
import LoveReact from '../LoveReact';

const ProductCard = ({ product }) => {
    const { brand, price, name, category, thumbnail } = product;


    // // Calculate discount and final price
    // const discountAmount = discountPercentage
    //     ? Math.ceil((discountPercentage * price) / 100)
    //     : 0;
    // const finalPrice = discountPercentage
    //     ? (price - discountAmount).toFixed(2)
    //     : price.toFixed(2);

    const { addProduct } = useCart();
    // Handle Add to Cart logic
    const handleAddToCart = () => {
        addProduct(product);

    };



    return (
        <div className="rounded-md p-1 relative group hover:shadow-xl hover:bg-white w-full max-w-[300px] bg-slate-50">
            <div className='relative w-full'>
                <LoveReact />
                <Badge discountAmount={12} />
            </div>

            <div className="w-full h-[200px] rounded-md overflow-hidden relative">
                <img
                    src={thumbnail || defaultImage}
                    alt="Product Image"
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-5 left-0 w-full z-10 px-5 grid gap-2 translate-x-full group-hover:-translate-x-0 transition-transform duration-300">
                    <button
                        className="flex justify-center py-1 w-full bg-opacity-30 bg-white text-green-500 rounded-md border border-green-500 border-opacity-30 hover:bg-[#03A629] hover:text-white transition-all"
                        onClick={handleAddToCart}
                    >
                        <Icon icon="ic:outline-shopping-cart" width="24" height="24" /> Add To Cart
                    </button>
                    <button className="flex justify-center py-1 w-full bg-opacity-30 bg-white text-green-500 rounded-md border border-green-500 border-opacity-30 hover:bg-[#03A629] hover:text-white transition-all">
                        <Icon icon="ic:outline-remove-red-eye" width="24" height="24" /> Quick View
                    </button>
                </div>
            </div>
            <div className="px-5 py-3">
                <h6 className="text-[#5A6573] font-sm font-normal capitalize">{brand ?? category ?? ""}</h6>
                <h4 className="text-[#1A2B3D] font-bold text-lg mb-2">{name.slice(0, 30) ?? ""}</h4>

                <p className="text-[#1882FF] font-bold text-2xl">
                    ${price}{" "}
                    {price > 0 && (
                        <span className="text-[#77818C] text-lg font-normal">
                            <del>${price}</del>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
