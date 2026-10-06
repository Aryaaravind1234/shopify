import { configureStore } from '@reduxjs/toolkit'

import productReducer from './ProductSlice'
import wishlistReducer from './WishlistSlice'
import cartReducer from './CartSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer
  }
})

export default store