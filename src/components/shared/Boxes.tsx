
import React from 'react'
import {FC} from 'react'


const Box:FC<{icon:JSX.Element, header:string }> = ({icon, header} ) => {
  return (
    <div className='hover:scale-x-110 gap-x-3 gap-y-5'>
      <div  className=' text-center px-5 py-8 hover:scale-x-110 duration-200 hover:text-[#c2edcc] cursor-pointer'>
      <div className='flex items-center justify-center text-5xl'>{icon}</div>
<h3 className='font-bold text-xl text-orange-700'>{header}</h3>
</div>
</div>
    
  )
}

export default Box
