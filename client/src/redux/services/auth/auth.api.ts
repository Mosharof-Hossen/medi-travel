import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        SignUp: builder.mutation({
            query: (userInfo) => ({
                url: "/user/sign-up",
                method: "POST",
                body: userInfo
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo
            })
        }),
    })
})

export const { useLoginMutation, useSignUpMutation } = authApi;