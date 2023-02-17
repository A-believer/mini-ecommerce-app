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
            <ul className='flex gap-8'>
              <li className='shadow-lg rounded-b-3xl'>
                <Cart/>
              </li>
              <li>
                <button className='p-[10px] bg-[orangered] border-none hover:bg-[rgb(0,6,59)] hover:text-white rounded-lg shadow-lg shadow-[rgb(0,6,59)]'>
                  Logout
                </button>
                {" "}
          </li>
            </ul>
          </li>
          
          
        </ul>
      </nav>
    </header>
  )
}

export default Header