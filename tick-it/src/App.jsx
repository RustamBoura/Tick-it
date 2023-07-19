import { useState } from 'react'
import './App.css'
import CustomNav from './components/Nav'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <CustomNav />
      <Main />
    </div>
  )
}

export default App
