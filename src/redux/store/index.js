import { configureStore } from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filters from '../reducers/filtersSlice/filtersSlice';
import categories from '../reducers/categoriesSlice/categoriesSlice';
import sort from '../reducers/sortSlice/sortSlice';
import cartReducer from '../reducers/cartSlice/cartSlice';
import auth from '../reducers/authSlice/authSlice';
import navBar from '../reducers/navBarSlice/navBarSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        filters,
        categories,
        sort,
        cart: persistedReducer,
        auth,
        navBar,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export const persistor = persistStore(store);
