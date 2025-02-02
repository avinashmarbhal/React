import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Componants/Login.jsx'
import Profile from './Componants/profile.jsx'

function App() {


  return (
    <UserContextProvider>
        <h1>React</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
