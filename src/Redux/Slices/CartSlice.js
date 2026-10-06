import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            let existingProduct = state.find(pro => pro.id == action.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            }
            else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }

        },
        removeFromCart:(state,action)=>{
            return state.filter(product=>product.id!==action.payload)
        },
        incrementQuantity:(state,action)=>{
            let existingProduct = state.find(pro => pro.id == action.payload)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            }
        },
        decrementQuantity:(state,action)=>{
            let existingProduct = state.find(pro => pro.id == action.payload)
            if (existingProduct) {
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            }
        },
        emptyCart:(state)=>{
            return[]

        }

    }
})

export default cartSlice.reducer
export const { addToCart,removeFromCart,incrementQuantity,decrementQuantity,emptyCart } = cartSlice.actions