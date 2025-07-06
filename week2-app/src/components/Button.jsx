import React from 'react'

const Button = ({ content }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
      >
        {content}
      </button>
    </>
  )
}

export default Button
