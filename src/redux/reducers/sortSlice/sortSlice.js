import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    options: [
        { label: 'price high to low', optionValue: 'high' },
        { label: 'price low to high', optionValue: 'low' },
    ],
    activeOption: '',
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortByChanged: (state, action) => {
            state.activeOption = action.payload;
        },
    },
});

const { actions, reducer } = sortSlice;

export const { sortByChanged } = actions;

export default reducer;
