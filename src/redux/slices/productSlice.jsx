import {STATUS} from "../../utils/status";
import {createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../api/getRequest/getProducts";
import {getProductDetails} from "../../api/getRequest/getProductDetails";
import {getProductsByCategoryName} from "../../api/getRequest/getProductsByCategoryName";


const initialState = {
    products:[],
    productsStatus:STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder) => {

        //  --------- Products ---------
        builder.addCase(getProducts.pending, (state, action)=>{
            state.productsStatus = STATUS.IDLE
        });

        builder.addCase(getProducts.fulfilled, (state,action)=>{
           state.productsStatus = STATUS.SUCCESS;
           state.products = action.payload;
        });

        builder.addCase(getProducts.rejected, (state,action)=>{
            state.productsStatus = STATUS.FAIL;
        });


        // ------- Product Details ---------
        builder.addCase(getProductDetails.pending, (state, action)=>{
            state.productDetailStatus = STATUS.IDLE
        });

        builder.addCase(getProductDetails.fulfilled, (state,action)=>{
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload;
        });

        builder.addCase(getProductDetails.rejected, (state,action)=>{
            state.productDetailStatus = STATUS.FAIL;
        });

        // --------- Product By Category Name -----------
        builder.addCase(getProductsByCategoryName.pending, (state, action)=>{
            state.productsStatus = STATUS.IDLE
        });

        builder.addCase(getProductsByCategoryName.fulfilled, (state,action)=>{
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload;
        });

        builder.addCase(getProductsByCategoryName.rejected, (state,action)=>{
            state.productsStatus = STATUS.FAIL;
        });
    }
})

export default productSlice.reducer;