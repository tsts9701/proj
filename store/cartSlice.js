import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let isProductAlreadyInCart = false;

            for (let prd of state.cartItems) {
                let payload = action.payload;

                if (prd.id === payload.product.id && prd.selectedSize === payload.selectedSize) {
                    isProductAlreadyInCart = true;
                    prd.quantity += 1;

                    break;
                }
            }
            

            if (!isProductAlreadyInCart) {
                let product = {};
                
                product.product = action.payload.product;
                product.selectedSize = action.payload.selectedSize;
                product.id = product.product.id;
                product.quantity = 1;
                
                state.cartItems.push(product);
            }
        },
        updateCart: (state, action) => {
            for (let prd of state.cartItems) {
                let payload = action.payload;

                if (prd.id === payload.id && prd.selectedSize === payload.currentSize) {
                    if (action.payload.key === "quantity") {
                        prd.quantity = +payload.val;
                    } else {
                        prd.selectedSize = payload.val;
                    }
                }
            }
        },

        removeFromCart: (state, action) => {
           if (state.cartItems.length === 1) {
                state.cartItems = [];

                return;
            }
            let newCartItems = [];

            for (let prd of state.cartItems) {
                if (prd.id !== action.payload.id || (prd.id === action.payload.id && 
                        prd.selectedSize !== action.payload.selectedSize)) {
                    newCartItems.push(prd);
                }
            }

            state.cartItems = newCartItems;
        },
        getCart: (state) => {
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart, getCart } = cartSlice.actions;

export default cartSlice.reducer;
