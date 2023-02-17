import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cartSlice'

const Product = ({ name, imgURL, id, price }) => {

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name, id, price,
      })
    );
  };

  
  return (
    <div className='w-[250px] h-[250px] flex flex-col items-center justify-center shadow-md hover:shadow-lg shadow-[#ccc] my-5 py-8'>
      <img src={imgURL} alt={name} className="w-[90%] h-2/5"/>
      <h2>{name}</h2>
      <p className='p-[10px] text-[30px]'>$ {price}</p>
      <button className='mt-[25px] mb-auto p-[10px] text-white border-none cursor-pointer bg-[rgba(21,26,42)]/80 rounded-b-2xl'
      onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product