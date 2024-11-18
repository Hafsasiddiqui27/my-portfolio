import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Link from 'next/link'
import Button from '@/components/shared/Button'


 
const Skills = () => {
  return (
  <section>
    <Wrapper>
      <div className='flex py-16 items-center'>
      <div className='max-w-screen-md'>
       <h3 className='text-4xl font-bold text-slate-700'> Lets Build Something Great Together</h3>
<p className=' text-slate-600 mt-3'>Ready to start your next project or need an expert to help take your software to the next level? Lets chat and make your ideas a reality.</p>
<div className='py-8'>
        <Link href='/contact'><Button text={"Contact Me"} /></Link></div>
</div>

     

        </div>
      


        
        
          

     
    </Wrapper>
  </section>
  )
}

export default Skills
