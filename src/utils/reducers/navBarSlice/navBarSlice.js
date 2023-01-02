import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    linksData: [
        { id: 1, label: 'home', route: '/' },
        { id: 2, label: 'delivery', route: '/delivery' },
        { id: 3, label: 'contacts', route: '/contacts' },
        { id: 4, label: 'checkout', route: '/checkout' },
    ],
    hamburgerMenuActive: false,
};

const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        toggleHamburgerMenu: (state, action) => {
            state.hamburgerMenuActive = !state.hamburgerMenuActive;
        },
        closeHamburgerMenu: (state, action) => {
            state.hamburgerMenuActive = false;
        },
    },
});

const { actions, reducer } = navBarSlice;

export const { toggleHamburgerMenu, closeHamburgerMenu } = actions;

export default reducer;
