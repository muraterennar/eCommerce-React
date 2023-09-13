import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dialogStatus: false,
};

const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers:{
        showDialogReducer: (state,action) => {
            state.dialogStatus = action.payload;
        }
    }
});

export const {showDialogReducer} = dialogSlice.actions;
export default dialogSlice.reducer;