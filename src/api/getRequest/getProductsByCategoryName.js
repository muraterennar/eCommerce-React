import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProductsByCategoryName = createAsyncThunk("productByCategoryName", async (category)=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/category/${category}`);
    const data = await  response.json();
    return data;
})