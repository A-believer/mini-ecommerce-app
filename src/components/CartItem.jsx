import React from 'react'
import { useDispatch } from 'react-redux'
import {cartActions} from "./../store/cartSlice"

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const decreaseCartItems = () => {
    dispatch(cartActions.removeFromCart(id))
  };

  const inreaseCartItems = () => {
    dispatch(
      cartActions.addToCart({id, name, price})
    )
  }
  return (
    <div className="flex justify-between border border-solid rounded-[10px] p-[20px] text-[20px] font-bold bg-[#2f3c7e] text-[#fbeaeb]">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <article>Total ${total}</article>
      <div className='flex gap-2'>
      <button onClick={decreaseCartItems} className="text-white text-[20px] w-[50px] border-none bg-[rgb(10,7,24)]">-</button>
      <p>{ quantity }</p>
      <button onClick={inreaseCartItems} className="text-white text-[20px] w-[50px] border-none bg-[rgb(10,7,24)]">+</button>
      </div>
      </div>
  )
}

export default CartItem