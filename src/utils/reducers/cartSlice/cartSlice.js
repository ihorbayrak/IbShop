import { createSlice, createSelector } from '@reduxjs/toolkit';

import { addCartItem, removeCartItem } from './cartActions/cartActions';

import { formatPrice } from '../../functions/functions';

const initialState = {
    cartItems: [],
    isCartOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartDropdown: (state, action) => {
            state.isCartOpen = !state.isCartOpen;
        },
        addItemToCart: (state, action) => {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemsFromCart: (state, action) => {
            state.cartItems = [];
        },
        deleteItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
    },
});

const { actions, reducer } = cartSlice;

export const {
    toggleCartDropdown,
    addItemToCart,
    removeItemFromCart,
    clearItemsFromCart,
    deleteItemFromCart,
} = actions;

export default reducer;

export const amountCartItemsSelector = createSelector(
    (state) => state.cart.cartItems,
    (state) => state.auth.isLoggedIn,
    (cartItems, isLoggedIn) => {
        if (!isLoggedIn) return 0;

        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }
);

export const totalCostSelector = createSelector(
    (state) => state.cart.cartItems,
    (state) => state.auth.isLoggedIn,
    (cartItems, isLoggedIn) => {
        if (!isLoggedIn) return 0;

        return cartItems.reduce(
            (acc, item) => acc + item.quantity * formatPrice(item.price, item.discount).toFixed(2),
            0
        );
    }
);
