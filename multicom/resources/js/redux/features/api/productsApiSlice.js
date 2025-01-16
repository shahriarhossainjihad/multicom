import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApiSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/products/all'
        })
    })
})

export const { useGetAllProductsQuery } = productsApiSlice;

export default productsApiSlice;