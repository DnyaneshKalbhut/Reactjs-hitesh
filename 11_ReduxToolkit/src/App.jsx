import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Redux Tool Kit</h1>
      <Addtodo/>
      <Todos/>
      
    </>
  )
}

export default App
