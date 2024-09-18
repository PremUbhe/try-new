import React from 'react'
import Image from 'next/image'
import logo from  '@/public/logo.svg'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <nav className='container mx-auto py-2 border-b border-primary-light'>
      <div className="flex items-center justify-between">
        <Image src={logo}
        height={50}
        alt="Logo"
        />
        <NavLinks/>
      </div>
    </nav>
  )
}

export default Navbar