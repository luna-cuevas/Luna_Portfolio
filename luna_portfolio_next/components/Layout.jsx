import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <main className='bg-[#222] min-h-screen text-white'>
      <NavBar />
      {children}
      {/* Footer */}
    </main>
  )
}

export default Layout