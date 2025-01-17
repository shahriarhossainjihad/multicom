
import ProductCard from "../../../../components/data-display/ProductCard";
import ProductCard2 from "../../../../components/data-display/ProductCard2";
import { useGetAllProductsQuery } from "../../../../redux/features/api/productsApiSlice";

const AllProductSection = () => {

    const { data, error, isLoading } = useGetAllProductsQuery();

    // console.log(data);


    // Conditional Rendering Outside JSX
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        </div>;
    }

    if (error || !data?.data) {
        return <p>{error?.message || "Error loading products"}</p>;
    }
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mx-auto my-5 justify-items-center">
                {/* {
                    data?.data.map(product => <ProductCard key={product.id} product={product} />)
                } */}
                {
                    data?.data.map(product => <ProductCard2 key={product.id} product={product} />)
                }
            </div>
        </>
    );
};

export default AllProductSection;