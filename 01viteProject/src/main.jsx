import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return (
    <div>
      <h1>my customFunction</h1>
    </div>
  )
}

//it will not run  because it is syntatically wrong
// const reactElement={
//   type: "a",
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// } 
const username = "Dnyanesh"

const reactElement= React.createElement(
  
  'a',
  {href:'https://google.com' ,   target:'_blank'},

  'click me to visit google',
  username
  )

const anotherElement=(
  <a href="https://google.com" target='_blank' >Visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
 
)
