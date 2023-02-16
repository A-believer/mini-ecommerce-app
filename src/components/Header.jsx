import React from 'react'
import Cart from './Cart'

const Header = () => {
  return (
    <header>
      <nav className='px-[30px] py-[10px] sticky shadow-[#ccc] shadow-lg mb-[10px]'>
        <ul className='flex flex-1 justify-between'>
          <li>
            <h2
            style={{fontFamily: "monospace", fontSize: "30px"}}>
              Mini E-commerce App
            </h2>
          </li>
          <li>
            <Cart/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header