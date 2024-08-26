import React from 'react'

const Input = (props) => {
    return (
        <div>
            <p className='font-bold p-1 text-start'>{props.title}</p>
            <input type={props.type} placeholder={props.placeholder} className='p-3 border-4 w-full rounded-md border-black' />
        </div>
    )
}

export default Input
