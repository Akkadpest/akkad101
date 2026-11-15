import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROOT } from '../config';

const getLoginToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('akkad_booking_token');
};

export const bookingsApi = createApi({
    reducerPath: 'bookingsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_ROOT,
        prepareHeaders: (headers) => {
            const token = getLoginToken();
            if (token) {
                headers.set('Token', token);
            }
            return headers;
        }
    }),
    tagTypes: ['Bookings', 'Profile'],
    endpoints: (builder) => ({
        sendCode: builder.mutation({
            query: (data) => ({
                url: 'send_code',
                method: 'POST',
                body: data
            })
        }),
        confirmPhone: builder.mutation({
            query: (data) => ({
                url: 'confirm_phone',
                method: 'POST',
                body: data
            })
        }),
        createBooking: builder.mutation({
            query: (data) => ({
                url: 'create_booking',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Bookings']
        }),
        getBookingInfo: builder.query({
            query: (id) => `bookings/${id}`
        }),
        getProfile: builder.query({
            query: () => 'user_profile',
            providesTags: ['Profile']
        })
    })
});

export const {
    useSendCodeMutation,
    useConfirmPhoneMutation,
    useCreateBookingMutation,
    useGetBookingInfoQuery,
    useGetProfileQuery
} = bookingsApi;
