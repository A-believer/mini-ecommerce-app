import React from 'react'

const Cart = () => {
  const quantity = 5;

  return (
    <div>
      <h3 className='border border-solid border-[#ccc] rounded-[20px] p-[10px] cursor-pointer'>
        Cart: {quantity} Items
      </h3>
    </div>
  )
}

export default Cart