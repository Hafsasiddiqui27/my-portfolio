import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import Link from 'next/link'


const Getstart = () => {
  return (
   <section>
    <Wrapper>
        
        <div className='max-w-screen-sm'>
        <p className='text-slate-700 font-semibold'>Let’s collaborate to bring your digital vision to life.</p>
        <h2 className='text-4xl font-bold text-slate-700 '>Ready to Get Started?</h2> 

 <p className=' text-slate-600 mt-2'>Your website is a crucial part of your brand. Let's work together to create a digital presence that drives results and sets you apart from the competition. Whether you’re looking to create a new website, redesign an existing one, or optimize your online presence, I am here to help.</p>
 <div className='py-8'>
        <Link href='/contact'><Button text={"Contact Me"} /></Link></div>
 {/* <div className='w-6/12 h-4/6 border border-double rounded-full absolute -left-40 -top-16 bg-orange-500 blur-3xl z-30'></div> */}


        </div>
       
    </Wrapper>
   </section>
  )
}

export default Getstart
