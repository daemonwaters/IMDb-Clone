import React, { useState } from 'react'
import './Global.scss'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
    <div className="wrapper">
      <Navbar/>
    </div>
    </React.Fragment>
  )
}

export default App
