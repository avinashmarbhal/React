import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-purple-600 text-white rounded-xl p-5 text-xl'>Recat</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
