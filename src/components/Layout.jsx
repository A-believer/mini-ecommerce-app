import React from 'react'
import Header from './Header'
import Products from './Products'

const Layout = () => {
  let total = 100

  return (
    <React.Fragment>
      <div className='flex flex-col flex-1'>
        <Header />
        <Products />
        <div className='text-right mr-[50px] mb-[20px] mt-[1rem] text-[20px]'>
          <h3 className='font-bold mb-4'>Total: ${total}</h3>
          <button className='w-[200px] bg-[orangered] border-none cursor-pointer hover:bg-[rgb(89,0,190)]'>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  )
}

export default Layout