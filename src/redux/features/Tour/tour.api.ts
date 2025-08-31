// import { baseApi } from "@/redux/baseApi";
// import { IResponse, ITourPackage } from "@/types";

// export const tourApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     addTourType: builder.mutation({
//       query: (tourTypeName) => ({
//         url: "/tour/create-tour-type",
//         method: "POST",
//         data: tourTypeName,
//       }),
//       invalidatesTags: ["TOUR"],
//     }),
//     removeTourType: builder.mutation({
//       query: (tourTypeId) => ({
//         url: `/tour/tour-types/${tourTypeId}`,
//         method: "DELETE",

//       }),
//       invalidatesTags: ["TOUR"],
//     }),
//     getTourTypes: builder.query({
//       query: () => ({
//         url: "/tour/tour-types",
//         method: "GET",
//       }),
//       providesTags: ["TOUR"],
//       transformResponse: (response) => response.data,
//     }),


//     addTour: builder.mutation({
//       query: (tourData) => ({
//         url: "/tour/create",
//         method: "POST",
//         data: tourData,
//       }),
//       invalidatesTags: ["TOUR"],
//     }),
//       getAllTour: builder.query<ITourPackage[],unknown>({
//       query: (params) => ({
//         url: "/tour",
//         method: "GET",
//         params:params
//       }),
//       providesTags: ["TOUR"],
//       transformResponse: (response:IResponse<ITourPackage[]>) => response.data,
//     }),
//       getMostAllTour: builder.query<ITourPackage[],unknown>({
//       query: () => ({
//         url: "/tour",
//         method: "GET",
//       }),
//       providesTags: ["TOUR"],
//       transformResponse: (response:IResponse<ITourPackage[]>) => response.data,
//     }),

//   }),
// });

// export const { useGetTourTypesQuery, useAddTourTypeMutation, useRemoveTourTypeMutation,useAddTourMutation ,useGetAllTourQuery,useGetMostAllTourQuery } = tourApi;