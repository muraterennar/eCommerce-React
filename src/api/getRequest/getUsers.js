import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("user", async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
    const data = await  response.json();
    return data;
});
