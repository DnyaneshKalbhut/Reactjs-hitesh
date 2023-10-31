import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  //changes prapogate kaise kare jatey hai react ke andar
function App() {
  // let counter = 0;
  let [counter , setCounter] = useState(0)

  const addVal = ()=>{
   setCounter(counter+1) 
  }
  const RemVal = ()=>{
    setCounter(counter-1) 
   }
  return (
    <>
       <h1>Chai aur react</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addVal}>AddVal</button>
      <button onClick={RemVal} >RemoveVal</button>
    </>
  )
}

export default App
