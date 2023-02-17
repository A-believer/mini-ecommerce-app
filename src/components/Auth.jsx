import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch
    dispatch(authActions.login())
  }
  return (
      <div className='flex flex-col justify-center items-center w-[500px] h-[500px] mt-[10%] mx-auto bg-[rebeccapurple]'>
          <h1 className='p-[30px] text-white text-[50px]'>Login</h1>{" "}
      <form className='flex flex-col text-center text-white'
      onSubmit={handleSubmit}>
              <label htmlFor="id" >Id</label>
              <input type="text" name='id' id='id' className='w-4/5 m-[10px] p-[10px] text-[20px] mx-auto'/>

              <label htmlFor="password" name="password" id="password">Password</label>
              <input type="password" name="password" id='password' className='w-4/5 m-[10px] p-[10px] text-[20px] mx-auto'/>

              <button className='border-none w-4/5 p-[10px] bg-[purple] hover:text-white hover:bg-[rgb(18,20,26)] mx-auto my-4' type="submit">Login</button>
          </form>
    </div>
  )
}

export default Auth