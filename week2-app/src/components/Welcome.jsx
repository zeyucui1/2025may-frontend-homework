import React from 'react'

const Welcome = () => {
  return (
    <div className="p-16 flex flex-col justify-center text-left">
      <h2 className="text-3xl font-bold text-teal-700 dark:text-teal-300 mb-4 whitespace-nowrap transition-colors duration-300">
        Welcome to Paint Quote System
      </h2>
      <hr className="border-t-2 border-teal-700 dark:border-teal-300 mb-4 transition-colors duration-300" />
      <p className="text-teal-600 dark:text-teal-400 leading-relaxed transition-colors duration-300">
        Consequat adipisicing ea do labore irure adipisicing occaecat cupidatat
        excepteur duis mo
      </p>
    </div>
  )
}

export default Welcome
