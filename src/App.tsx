import { TodoProvider } from './context/TodoContext'
import { AuthProvider } from './context/AuthContext'
import './App.css'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <AuthProvider>
        <TodoProvider>
          <Home />
        </TodoProvider>
      </AuthProvider>
    </>
  )
}

export default App
