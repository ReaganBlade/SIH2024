import React from 'react';
import Button from '../../Components/Accessibility/Button';
import Input from '../../Components/Accessibility/Input';


const SignIn = () => {
  return (
<div className='flex flex-col justify-center items-center h-screen w-1/2 text-center font-mono'>
      <div className='absolute top-0 left-0 p-5 font-bold'>AlumniCo.</div>
      <div className='flex flex-col w-2/3 gap-3'>
        <div className=' font-bold'>
          {/* Intro text */}
          <h1 className='text-[28px]'>Welcome to AlumniCo.!</h1>
          <p className='text-gray-400'>New here? No worries, let's get you started!</p>
        </div>
        <div className='flex flex-col gap-3'>
          <Input title="Name" type="text" placeholder="Your Name"/>
          <Input title="Organization/College/University" type="text" placeholder="Your Organization/College/University" />
          <Input title="Email" type="text" placeholder="Your Email"/>
          <Input title="Password" type="password" placeholder="Your Password"/>
        </div>
        <Button title="Log In" onClick={() => {
          console.log("Attempting to Login...")
        }}/>
      </div>
      <div className='m-3 flex gap-2 '>
        Already have an Account?
        <p className='text-blue-700 font-bold'>Login</p>
      </div>
      <div className='absolute bottom-0 p-5 font-bold text-gray-400'>
        <h1>© AlumniCo.</h1>
        <p className='font-normal'>All rights Reserved</p> 
      </div>
    </div>
  )
}

export default SignIn
