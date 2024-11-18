import React from 'react'
import {FC} from 'react'

const Wrapper:FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className=' max-w-screen-xl mx-auto bg-[#c2edcc] px-4'>
      {children}
    </div>
  )
}

export default Wrapper