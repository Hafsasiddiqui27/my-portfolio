import React from 'react'
import {FC} from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <div>
        <button className='bg-orange-700 text-white font-semibold px-8 py-3 rounded-r-3xl shadow-2xl hover:scale-110 duration-400'>{text}</button>
      
    </div>
  )
}

export default Button
