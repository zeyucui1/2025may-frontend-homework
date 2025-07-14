'use client'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeItem,
  increase,
  decrease,
  clearCart,
  CartItem,
} from '@/store/cartSlice'
import React from 'react'

const CartComponent = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const handleIncrease = (id: string, size: string, color: string) => {
    dispatch(increase({ id, size, color }))
  }

  const handleDecrease = (id: string, size: string, color: string) => {
    dispatch(decrease({ id, size, color }))
  }

  const handleRemove = (id: string, size: string, color: string) => {
    dispatch(removeItem({ id, size, color }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
      )
      .toFixed(2)
  }
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item: CartItem) => (
              <li
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleDecrease(item.id, item.size, item.color)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleIncrease(item.id, item.size, item.color)
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id, item.size, item.color)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-lg font-bold">Total: ${calculateTotal()}</h2>
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default CartComponent
