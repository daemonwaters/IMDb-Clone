import React, { useState } from 'react'
import './Global.scss'
import Navbar from './components/navbar/Navbar'
import Menu from './components/Menu/Menu'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuDisplay = ()=>{
    setShowMenu(!showMenu)
  }

  return (
    <React.Fragment>
    <div className="wrapper">
      <Navbar handleMenuDisplay={handleMenuDisplay}/>
      <Menu 
      handleMenuDisplay={handleMenuDisplay}
      setShowMenu={setShowMenu}
      showMenu={showMenu}/>
    </div>
    </React.Fragment>
  )
}

export default App
