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

    })
})

export const { useCreateClinicMutation } = clinicApi