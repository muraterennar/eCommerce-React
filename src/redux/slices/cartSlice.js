import {createSlice} from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
};

const setToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = {
    cart: getFromLocalStorage(),
    quantity: 0,
    totalAmount: 0,
    itemCount: 0,
    open: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.cart.find(item => item.id === action.payload.id);
            if (isItemCart) {
                const tempCart = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQuantity = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQuantity * item.price;
                        return {
                            ...item, quantity: tempQuantity, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item;
                    }

                })
                state.cart = tempCart;
                setToLocalStorage(state.cart);
            } else {
                state.cart.push(action.payload);
                setToLocalStorage(state.cart);
            }
        },

        removeFromCart: (state, action) => {
            const tempCart = state.cart.filter(item => item.id !== action.payload);
            state.cart = tempCart;
            setToLocalStorage(state.cart);
        },

        clearCart: (state) => {
            state.cart = [];
            localStorage.removeItem(state.cart);
        },

        getCartTotal: (state) => {
            state.totalAmount = state.cart.reduce((cartTotal, cartItem) => {
                return cartTotal + (cartItem.price * cartItem.quantity);
            }, 0);

            state.itemCount = state.cart.length;
        },

        setOpen: (state, action) => {
            state.open = action.payload;
        }
    }
});

export const {addToCart, removeFromCart, clearCart, getCartTotal, setOpen} = cartSlice.actions;

export default cartSlice.reducer;