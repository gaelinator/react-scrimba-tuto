import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

function MainContent () {
  return (
    <> 
      <h1>Hello from React</h1>
      <h1>My awesome first component</h1>
    </>
  )
}
function Header() {
  return(
    <header className='header'>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </header>
  )
}


function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default App
