import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import HeroPoster from '@/components/assets/images/hero-poster.png'
import Button from '@/components/shared/Button'
import Link from 'next/link'

const Hero = () => {
  return (
   
    <section>
       <Wrapper>
        <div className='flex flex-col-reverse md:flex-row items-center py-4'>
          {/* Left side */}
          <div className='flex-1 max-w-xl'>
            <Image src={HeroPoster} alt='hero-poster' width={450} height={200} className='border rounded-e-full mb-14 drop-shadow-xl -hue-rotate-180 hover:rotate-6'/>
          </div>
          {/* Right side */}
          <div className='flex-1 max-w-xl'>
          <h1 className='text-4xl font-bold text-slate-700  sm:text-5xl mb-4'>Hello! I am <span className='font-semibold text-orange-600'> Hafsa Siddiqui </span></h1>
 <h3 className='font-bold text-lg text-slate-800'>Web Developer | Creative Problem Solver | Passionate Learner</h3>        
        <p className='text-slate-600 mt-2'>Are you looking for a sleek, responsive, and high-performing website that stands out in today’s digital world? As a professional web developer, I specialize in creating custom websites that not only look great but also deliver exceptional user experiences. Whether you’re starting from scratch or need an upgrade, I’m here to turn your ideas into a dynamic online presence.</p>
        {/* Whether you're launching a startup or optimizing enterprise systems, powerful software is the backbone of your success. As a software engineer, I’m passionate about crafting intuitive, efficient, and scalable solutions that solve real-world problems. */}

<p className='text-slate-600 mt-0.5'>Let’s build something meaningful—together.</p>

<h4 className='font-bold text-lg text-slate-800 mt-3'>Email:</h4>
<p className=' text-slate-600 font-bold'>hafsasiddiqui27@gmail.com</p>
        <div className='mt-7 mb-10'>
        <Link href='/contact'><Button text={"Let's Work Together "} /></Link></div>
        </div>
        </div>
      
       </Wrapper>
    </section>
   
  )
}

export default Hero
