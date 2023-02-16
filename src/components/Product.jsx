import React from 'react'

const Product = ({ name, imgURL, id, price }) => {
  
  return (
    <div className='w-[250px] h-[250px] flex flex-col items-center justify-center shadow-md hover:shadow-lg shadow-[#ccc] my-5 py-8'>
      <img src={imgURL} alt={name} className="w-[90%] h-2/5"/>
      <h2>{name}</h2>
      <p className='p-[10px] text-[30px]'>$ {price}</p>
      <button className='mt-[25px] mb-auto p-[10px] text-white border-none cursor-pointer bg-[rgba(21,26,42)]/80'>Add to Cart</button>
    </div>
  )
}

export default Product