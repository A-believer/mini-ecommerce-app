import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList);
  return (
    <div className='border border-solid rounded-[10px] m-[20px] h-[400px] p-[10px] overflow-scroll overflow-x-hidden'>
      <h2>Your Cart</h2>
      <ul className='list-none'>
        {cartItems.map((item) => (
          <li className='p-[10px]' key={item.id}> {" "}
            <CartItem
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
              quantity={ item.quantity} />
            {" "}
        </li>
       ))}
      </ul>
    </div>
  )
}

export default CartItems