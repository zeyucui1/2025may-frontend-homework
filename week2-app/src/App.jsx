import LoginForm from './components/LoginForm'
import Welcome from './components/welcome'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  return (
    <div className="min-h-screen py-20 flex bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      <Welcome />
      <LoginForm />
      <ThemeToggle />
    </div>
  )
}

export default App
