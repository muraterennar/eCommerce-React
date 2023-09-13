import {configureStore} from '@reduxjs/toolkit'
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import sortSlice from "./slices/sortSlice";
import cartSlice from "./slices/cartSlice";
import dialogSlice from "./slices/dialogSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        sort: sortSlice,
        cart:cartSlice,
        dialog:dialogSlice,
    },
})