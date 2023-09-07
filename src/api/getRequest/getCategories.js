import {createAsyncThunk} from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('category', async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/categories`);
    const data = await response.json();
    return data;
});