import {createSlice} from "@reduxjs/toolkit";
import {SORT_STATUS} from "../../utils/sortSatatus";

const initialState = {
    sortStatus: SORT_STATUS.DEFAULT,
    sort: {}
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload;
        },

        incSort: (state, action) => {
            state.sort = SORT_STATUS.INC;
        },

        decSort: (state, action) => {
            state.sort = SORT_STATUS.DEC;
        },

        defaultSort: (state, action) => {
            state.sort = SORT_STATUS.DEFAULT;
        }
    }
});

export const {setSort} = sortSlice.actions;

export default sortSlice.reducer;