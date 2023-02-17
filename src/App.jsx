import React from "react"
import {useSelector} from 'react-redux'
import Auth from './components/Auth'
import Layout from './components/Layout'
import './index.css'
function App() {
 const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 console.log(isLoggedIn);
const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center h-screen">
        {!isLoggedIn && <Auth />}
      </div>
      
      {isLoggedIn && <Layout/>}
    </div>
  )
}

export default App
