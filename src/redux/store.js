import {configureStore} from '@reduxjs/toolkit'
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import sortSlice from "./slices/sortSlice";
import cartSlice from "./slices/cartSlice";
import dialogSlice from "./slices/dialogSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        user: userSlice,
        sort: sortSlice,
        cart:cartSlice,
        dialog:dialogSlice,
    },
})