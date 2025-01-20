import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApiSlice = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: "POST",
                body: user,
            })
        }),
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: "POST",
                body: user,
            })
        }),
        getUser: builder.query({
            query: (id) => `/user/${id}`,
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useGetUserQuery } = authApiSlice;

export default authApiSlice;