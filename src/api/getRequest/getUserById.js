import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUserById = createAsyncThunk("user", async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`);
    const data = await response.json();
    return data;
});