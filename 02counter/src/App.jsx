import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)
  const [alert, setAlert] = useState('')
  // let counter = 5

  const addValue = () => {
    setAlert('')
    if(counter < 20){
      // counter = counter - 1;
      setCounter(counter + 1)
      console.log(`Clicked:- ${counter+1}`);
    }
    else{
      setAlert('value cant go above 20!!!')
    }
  }

  const removeValue = () =>
  {
   setAlert('')
    if(counter > 0){
      // counter = counter - 1;
      setCounter(counter - 1)
      console.log(`Clicked:- ${counter-1}`);
    }
    else{
      setAlert('value cant go below 0!!!')
    }
    
    
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}
      >Remove value</button>
      <h1>{alert}</h1>
    </>
  )
}

export default App
