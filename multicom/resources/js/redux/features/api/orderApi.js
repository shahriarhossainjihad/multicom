import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
    reducerPath: 'order',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        orderPlace: builder.mutation({
            query: (data) => ({
                url: '/orders/place',
                method: "POST",
                body: data,
            })
        }),
    })
})

export const { useOrderPlaceMutation } = orderApi;

export default orderApi;