import Link from 'next/link'
import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
Link

const Header = () => {
  return (
    <Wrapper>
    <header className='flex justify-between items-center py-5 sticky top-0'>
        {/* logo */}
       <div>
        <h2 className='text-4xl font-semibold italic text-orange-600' ><span className='text-black text-3xl'>H</span>S</h2>
        </div>
        {/* NAvigation Bar */}
        <ul className='flex text-orange-700'>
            <li>
                <Link className='hover:font-semibold px-3' href={"/"}>Home</Link>
                <Link className='hover:font-semibold px-3 ' href={"/about"}>About</Link>
                <Link className='hover:font-semibold px-3' href={"/contact"}>Contact</Link>
            </li>
        </ul>
    </header>
    </Wrapper>
  )
}

export default Header
