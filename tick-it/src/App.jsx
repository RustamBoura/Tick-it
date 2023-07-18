import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Main />
    </div>
  )
}

export default App
