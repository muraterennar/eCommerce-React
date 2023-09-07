import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProductDetails = createAsyncThunk("productDetails", async (id)=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
    const data = await  response.json();
    return data;
});