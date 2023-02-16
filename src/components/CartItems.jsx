import React from 'react'
import CartItem from './CartItem'

const CartItems = () => {
  return (
    <div className='border border-solid rounded-[10px] m-[20px] h-[400px] p-[10px] overflow-scroll overflow-x-hidden'>
      <h2>Your Cart</h2>
      <ul className='list-none'>
        <li className='p-[10px]'>
          <CartItem id={1} price={2500} name={"Macbook"} />
        </li>
      </ul>
    </div>
  )
}

export default CartItems