import { configureStore } from '@reduxjs/toolkit';
import { servicesApi } from './services';
import { bookingsApi } from './bookings';
import { cartSlice } from './cart';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [bookingsApi.reducerPath]: bookingsApi.reducer,
        [servicesApi.reducerPath]: servicesApi.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        servicesApi.middleware,
        bookingsApi.middleware
    )
});

setupListeners(store.dispatch);
