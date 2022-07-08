import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='absolute z-20 flex justify-end w-screen pt-5'>
      <div className='mr-44 flex gap-10 text-xl'>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar