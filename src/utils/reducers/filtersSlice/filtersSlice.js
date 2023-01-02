import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [
        { label: 'all', filterName: 'all' },
        { label: 'new in', filterName: 'latest' },
        { label: 'discount', filterName: 'discount' },
        { label: 'bestsellers', filterName: 'popular' },
    ],
    activeFilter: 'all',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
    },
});

const { actions, reducer } = filtersSlice;

export const { filterChanged } = actions;

export default reducer;
