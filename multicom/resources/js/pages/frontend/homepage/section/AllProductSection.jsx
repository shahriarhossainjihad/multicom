
import ProductCard from "../../../../components/data-display/ProductCard";
import { useGetAllProductsQuery } from "../../../../redux/features/api/productsApiSlice";

const AllProductSection = () => {

    const { data, error, isLoading } = useGetAllProductsQuery();


    // Conditional Rendering Outside JSX
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        </div>;
    }

    if (error || !data?.products) {
        return <p>{error?.message || "Error loading products"}</p>;
    }
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mx-auto my-5 justify-items-center">
                {
                    data.products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    );
};

export default AllProductSection;