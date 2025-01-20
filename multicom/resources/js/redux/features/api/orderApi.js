import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
    reducerPath: 'order',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        orderPlace: builder.mutation({
            query: (data) => ({
                url: '/place-order',
                method: "POST",
                body: data,
            })
        }),
        orderByUser: builder.query({
            query: (id) => `/order-by-user/${id}`,
        })
    })
})

export const { useOrderPlaceMutation, useOrderByUserQuery } = orderApi;

export default orderApi;