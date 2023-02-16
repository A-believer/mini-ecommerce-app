import React from "react"
import Auth from './components/Auth'
import Layout from './components/Layout'
import './index.css'
function App() {
 

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center h-screen">
        <Auth />
      </div>
      
      {/* <Layout/> */}
    </div>
  )
}

export default App
