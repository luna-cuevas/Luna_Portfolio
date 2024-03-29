import React, { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true)
  
  return (
    <nav id="site-menu" className="flex overflow-hidden z-50 flex-wrap md:absolute w-full justify-end max-w-screen max-h-96 pl-12 mt-6 pr-8 bg-[#222]">  
      <div className='h-fit w-fit relative flex'> 
        <div className="w-fit sm:w-auto sm:self-center z-100 sm:flex-none flex flex-col flex-no-wrap items-center self-start justify-between">
          <a>
            <div onClick={() => setIsOpen(!isOpen)} className={`absolute ${isOpen ? 'top-3 -left-3' : 'top-9 -left-4'} cursor-grab z-[100] w-8 h-8 md:hidden`} />
            <button id="menuBtn" className={`${isOpen ? 'hamburger' : 'open'} block relative md:hidden mt-10 z-50 focus:outline-none`} type="button">
              <span className="hamburger__top-bun"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
          </a>
        </div>
      </div>  
      <div id="menu" className={`font-normal z-50 md:opacity-100 md:max-h-96 text-3xl text-white md:w-fit md:visible gap-4 md:gap-8 md:flex text-right mr-0 pr-3 flex-col md:flex-row md:py-2 md:pb-4 sm:py-0 sm:pb-0 w-screen border-r-2 md:border-r-0 border-gray-200 transition-all flex duration-500 ${isOpen ? 'invisible max-h-0 my-0 opacity-0' : 'visible max-h-96 my-12'}`}>
        <h2 className='hover:underline underline-offset-4'><Link href='/'>Home</Link></h2>
        <h2 className='hover:underline underline-offset-4'><Link href='/projects'>Projects</Link></h2>
        {/* <h2 className='hover:underline underline-offset-4'><Link href='/about'>About</Link></h2> */}
        <h2 className='hover:underline underline-offset-4'><Link href='/contact'>Contact</Link></h2>
      </div>
    </nav>
  )
}

export default NavBar