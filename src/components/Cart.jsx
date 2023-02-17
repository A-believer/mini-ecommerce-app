import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const Cart = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch()

  const showCart = () => {
  dispatch(cartActions.setShowCart())
}
  return (
    <div>
      <h3 className='border border-solid border-[#ccc] rounded-b-[20px] p-[10px] cursor-pointer hover:bg-[#2f3c7e] hover:text-white' onClick={showCart}>
        Cart: {quantity} Items
      </h3>
    </div>
  )
}

export default Cart