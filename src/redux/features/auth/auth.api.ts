import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp } from "@/types";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"],
        }),
        sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
            query: (userInfo) => ({
                url: "/otp/send",
                method: "POST",
                data: userInfo,
            }),
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: "/otp/verify",
                method: "POST",
                data, // { email, otp }
            }),
        }),
        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
        allUserInfo: builder.query({
            query: () => ({
                url: "/user/all-users",
                method: "GET",
            }),
            providesTags: ["USER"],
            transformResponse: (response) => response.data,
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useSendOtpMutation,
    useUserInfoQuery,
    useLogoutMutation,
    useAllUserInfoQuery,
    useVerifyOtpMutation
} = authApi;
