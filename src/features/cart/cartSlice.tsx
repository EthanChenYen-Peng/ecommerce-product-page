import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface ItemPayload {
  name: string
  quantity: number
  priceInCents: number
  discountPercent: number
}
interface CartState {
  items: {
    [productId: string]: ItemPayload
  }
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
      action: PayloadAction<ItemPayload & { productId: string }>
    ) {
      const { productId, quantity, priceInCents, discountPercent, name } =
        action.payload
      if (state.items[productId]) {
        state.items[productId].quantity += quantity
      } else {
        state.items[productId] = {
          quantity,
          name,
          priceInCents,
          discountPercent,
        }
      }
    },

    removeFromCart(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload
      if (state.items[productId]) {
        delete state.items[productId]
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
