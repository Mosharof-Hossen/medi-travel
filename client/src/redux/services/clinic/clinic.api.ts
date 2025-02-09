import { baseApi } from "../../api/baseApi";

const clinicApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createClinic: builder.mutation({
            query: (clinicInfo) => ({
                url: "/clinic/create",
                method: "POST",
                body: clinicInfo
            })
        }),


        getAllClinic: builder.query({
            query: () => ({
                url: "/clinic/clinics",
                method: "GET",
            })
        }),

    })
})

export const { useCreateClinicMutation, useGetAllClinicQuery } = clinicApi