import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
<div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=> setColor("red") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setColor("black")} className='outlline-none px-4 py-1 rounded-full text-white  shadow-lg' style={{backgroundColor:"black"}}>Black</button>
    <button onClick={()=>setColor("yellow")} className='outlline-none px-4 py-1 rounded-full text-white  shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
    <button onClick={()=>setColor("maroon")} className='outlline-none px-4 py-1 rounded-full text-black  shadow-lg' style={{backgroundColor:"maroon"}}>Maroon</button>
    <button onClick={()=>setColor("violet")} className='outlline-none px-4 py-1 rounded-full text-white  shadow-lg' style={{backgroundColor:"violet"}}>Violet</button>
  </div>
</div>
</div>
  )
}

export default App
