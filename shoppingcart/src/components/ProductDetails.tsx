'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { addItem } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const sizes = ['500ML', '1L', '2L', '4L', '10L', '15L']
const colors = [
  { name: 'All Heart', value: 'bg-red-400' },
  { name: 'Ocean Blue', value: 'bg-blue-500' },
  { name: 'Leaf Green', value: 'bg-green-500' },
]

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('4L')
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const router = useRouter()
  const dispatch = useDispatch()
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1)
  }
  const handleIncrease = () => {
    setQuantity((q) => q + 1)
  }
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: '1',
        name: 'Wash&Wear® Low Sheen',
        price: 98.9,
        size: selectedSize,
        color: selectedColor.name,
        quantity,
        image: '/img/dulux.png',
      })
    )
    router.push('/cart')
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-lg font-medium text-gray-700">Dulux</h2>
      <h1 className="text-2xl font-bold text-gray-900 mt-1">
        Wash&Wear® Low Sheen
      </h1>
      <p className="text-3xl font-semibold text-blue-600 mt-2">$98.90</p>

      {/* Color */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Color
        </label>
        <div className="grid grid-cols-3 gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`flex items-center gap-2 border rounded p-2 ${
                selectedColor.name === color.name
                  ? 'border-blue-600'
                  : 'border-gray-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full ${color.value}`}></span>
              <span className="text-sm text-gray-800">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Size
        </label>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border rounded px-4 py-2 text-sm font-medium ${
                selectedSize === size
                  ? 'border-blue-600 text-blue-600'
                  : 'text-gray-700'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex border rounded overflow-hidden">
          <button
            onClick={handleDecrease}
            className="w-10 h-10 flex items-center justify-center text-xl text-gray-700"
          >
            -
          </button>
          <div className="w-10 h-10 flex items-center justify-center font-medium text-gray-800">
            {quantity.toString().padStart(2, '0')}
          </div>
          <button
            onClick={handleIncrease}
            className="w-10 h-10 flex items-center justify-center text-xl text-gray-700"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add to cart <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  )
}
export default ProductDetail
