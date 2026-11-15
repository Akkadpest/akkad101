import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROOT } from '../config';

export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_ROOT }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => 'services'
        })
    })
});

export const { useGetServicesQuery } = servicesApi;
