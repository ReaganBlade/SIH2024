import React from 'react'

const Button = (props) => {
  return (
    <button className='p-3 w-full rounded-md bg-black text-white font-bold' onClick={props?.onClick}>{props.title}</button>
  )
}

export default Button
