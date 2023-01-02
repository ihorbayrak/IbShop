import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';

import { getCategoriesAndDocuments } from '../../firebase/firebase';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',

    async () => {
        return await getCategoriesAndDocuments();
    }
);

const initialState = {
    categories: [],
    categoriesLoadingStatus: 'idle',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.categoriesLoadingStatus = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoriesLoadingStatus = 'idle';
                state.categories.push(...action.payload);
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.categoriesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = categoriesSlice;

export default reducer;

export const categoriesMapSelector = createSelector(
    (state) => state.categories.categories,
    (categories) => {
        return categories.reduce((acc, category) => {
            const { title, items } = category;

            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
);

export const categoriesKeysSelector = createSelector(categoriesMapSelector, (categories) => {
    return Object.keys(categories);
});

export const categoriesInStockSelector = createSelector(categoriesMapSelector, (categories) => {
    const stock = [];

    for (let category in categories) {
        stock.push(
            ...categories[category]
                .map((product) => {
                    if (!product.popular && !product.latest && !product.discount) {
                        return { ...product, category };
                    } else {
                        return null;
                    }
                })
                .filter((product) => product)
        );
    }

    return stock;
});
