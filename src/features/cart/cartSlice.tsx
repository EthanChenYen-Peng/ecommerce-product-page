import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface Item {
  priceInCent: number
  quantity: number
  name: string
}
interface CartState {
  items: { [productId: string]: number }
}

const initialState: CartState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const { productId, quantity } = action.payload
      if (state.items[productId]) {
        state.items[productId] += quantity
      } else {
        state.items[productId] = quantity
      }
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
