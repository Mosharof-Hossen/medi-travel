import { baseApi } from "../../api/baseApi";

const clinicApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createClinic: builder.mutation({
            query: (clinicInfo) => ({
                url: "/clinic/create",
                method: "POST",
                body: clinicInfo
            }),
            invalidatesTags: ["clinics"]
        }),


        getAllClinic: builder.query({
            query: () => ({
                url: "/clinic/clinics",
                method: "GET",
            }),
            providesTags: ["clinics"]

        }),

        singleClinic: builder.query({
            query: (id) => ({
                url: `/clinic/details/${id}`,
                method: "GET",
            })
        }),

    })
})

export const { useCreateClinicMutation, useGetAllClinicQuery, useSingleClinicQuery } = clinicApi