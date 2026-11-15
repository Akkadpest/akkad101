import { createSlice } from '@reduxjs/toolkit';

const CART_LOCAL_STORAGE_ID = 'AKDBW_CART_DATA';

const saveCart = (cart) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(CART_LOCAL_STORAGE_ID, JSON.stringify(cart));
    }
};

const loadCart = () => {
    if (typeof window === 'undefined') return null;
    const str = localStorage.getItem(CART_LOCAL_STORAGE_ID);
    if (str === null) {
        return null;
    }
    return JSON.parse(str);
};

const getInitialState = () => {
    const savedCart = loadCart();
    return savedCart === null ? {
        totalPrice: 0,
        items: [],
        serviceDate: '',
        serviceTime: '',
        location: { lat: 25.090235, lng: 55.1658491 },
        locationName: '',
        phone: '',
        email: '',
        paymentType: ''
    } : savedCart;
};

const calculateCartTotal = (state) => (
    state.items
        .map(itm => itm.count * itm.option.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialState(),
    reducers: {
        clearCart: (state) => {
            state.items = [];
            state.serviceDate = '';
            state.serviceTime = '';
            state.totalPrice = 0;
            saveCart(state);
        },
        setPaymentType: (state, action) => {
            state.paymentType = action.payload;
            saveCart(state);
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
            saveCart(state);
        },
        setEmail: (state, action) => {
            state.email = action.payload;
            saveCart(state);
        },
        setLocation: (state, action) => {
            state.location = action.payload;
            saveCart(state);
        },
        setLocationName: (state, action) => {
            state.locationName = action.payload;
            saveCart(state);
        },
        setServiceDate: (state, action) => {
            state.serviceDate = action.payload;
            saveCart(state);
        },
        setServiceTime: (state, action) => {
            state.serviceTime = action.payload;
            saveCart(state);
        },
        decreaseInCart: (state, action) => {
            const items = state.items,
                existing = items.find(itm => itm.option.id === action.payload.option.id);
            if (existing) {
                if (existing.count > 1) {
                    existing.count -= 1;
                } else {
                    if (typeof window !== 'undefined' && window.confirm('This will remove item from cart, are you sure?')) {
                        state.items = items.filter(itm => itm.option.id !== action.payload.option.id);
                    }
                }
            }
            state.totalPrice = calculateCartTotal(state);
            saveCart(state);
        },
        increaseInCart: (state, action) => {
            const items = state.items,
                existing = items.find(itm => itm.option.id === action.payload.option.id);
            if (existing) {
                existing.count += 1;
            }
            state.totalPrice = calculateCartTotal(state);
            saveCart(state);
        },
        addToCart: (state, action) => {
            const items = [{
                service: action.payload.service,
                option: action.payload.option,
                count: 1
            }];
            state.items = items;
            state.totalPrice = calculateCartTotal(state);
            saveCart(state);
        }
    }
});

export const {
    addToCart,
    increaseInCart,
    decreaseInCart,
    setServiceDate,
    setServiceTime,
    setLocation,
    setLocationName,
    setPhone,
    setEmail,
    setPaymentType,
    clearCart
} = cartSlice.actions;

export const selectWholeCart = (state) => state.cart;
export const selectCartTotal = (state) => state.cart.totalPrice;
export const selectCartItems = (state) => state.cart.items;
export const selectServiceDate = (state) => state.cart.serviceDate;
export const selectServiceTime = (state) => state.cart.serviceTime;
export const selectLocationName = (state) => state.cart.locationName;
export const selectLocation = (state) => state.cart.location;
export const selectEmail = (state) => state.cart.email;
export const selectPhone = (state) => state.cart.phone;
export const selectPaymentType = (state) => state.cart.paymentType;
