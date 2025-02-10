import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://medi-travel-server.vercel.app/api' }),
    endpoints: () => ({}),
    tagTypes:['clinics']
})

