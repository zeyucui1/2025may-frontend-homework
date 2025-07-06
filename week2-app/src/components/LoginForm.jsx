import React, { useState } from 'react'
import InputForm from './InputForm'
import CheckedBox from './CheckedBox'
import Button from './Button'

const LoginForm = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { phone, password, remember })
  }
  return (
    <div className="bg-white dark:bg-gray-800 w-full max-w-md mx-auto p-10 rounded-lg shadow-md flex flex-col justify-center transition-colors duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1 transition-colors duration-300">
        Sign In
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">
        Enter details to sign in your account
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputForm
          id="phone"
          label="Phone number"
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputForm
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          rightLabel="Forgot?"
          rightLabelHref="/forgot-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CheckedBox
          id="remember"
          content="Remember Login"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />

        <Button content="Sign In" />
      </form>

      <p className="mt-6 text-sm text-gray-600 text-center">
        Don’t have an account?{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  )
}

export default LoginForm
