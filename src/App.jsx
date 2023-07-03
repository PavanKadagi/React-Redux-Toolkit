import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IceCreamView } from './features/icecream/icecreamView'
import { UserView } from './features/user/userView'

function App() {

  return (
    <div style={{textAlign:"center"}} >
      <h1>RTK</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
