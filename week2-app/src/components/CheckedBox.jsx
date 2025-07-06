import React from 'react'

const CheckedBox = ({ id, content, onChange, checked }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded transition-colors duration-300"
      />
      <label className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
        {content}
      </label>
    </div>
  )
}

export default CheckedBox
