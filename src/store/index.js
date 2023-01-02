import { configureStore } from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filters from '../utils/reducers/filtersSlice/filtersSlice';
import categories from '../utils/reducers/categoriesSlice/categoriesSlice';
import sort from '../utils/reducers/sortSlice/sortSlice';
import cartReducer from '../utils/reducers/cartSlice/cartSlice';
import auth from '../utils/reducers/authSlice/authSlice';
import navBar from '../utils/reducers/navBarSlice/navBarSlice';

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
