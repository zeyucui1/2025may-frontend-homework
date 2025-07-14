import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size: string
  color: string
  image?: string
}
export interface CartState {
  items: CartItem[]
}
const initialState: CartState = {
  items: [],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //add item
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload
      const existingItem = state.items.find(
        (i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
      )
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        state.items.push(item)
      }
    },
    //remove item
    removeItem: (
      state,
      action: PayloadAction<{ id: string; size: string; color: string }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id &&
          item.size !== action.payload.size &&
          item.color !== action.payload.color
      )
    },
    increase: (
      state,
      action: PayloadAction<{ id: string; size: string; color: string }>
    ) => {
      const item = state.items.find(
        (i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size &&
          i.color === action.payload.color
      )
      if (item) item.quantity++
    },
    decrease: (
      state,
      action: PayloadAction<{ id: string; size: string; color: string }>
    ) => {
      const item = state.items.find(
        (i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size &&
          i.color === action.payload.color
      )
      if (item && item.quantity > 1) item.quantity--
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, increase, decrease, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
