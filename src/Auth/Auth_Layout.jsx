import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth_Layout = () => {
  return (
    <div className='flex'>
      <Outlet />
      <img src="public/assets/Auth_Layout_Img.jpg" alt="" className="h-screen md:w-1/2 object-cover object-left"/>
    </div>
  )
}

export default Auth_Layout
