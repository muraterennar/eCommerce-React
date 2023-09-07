import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products", async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    const data = await  response.json();
    return data;
})