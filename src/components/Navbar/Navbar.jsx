import React from 'react'
import '../../App.css'
import logo from '../../Assets/images/logo.png'

export default function Navbar() {
  return (
    <>
    <div className='bg-black align-center'>
        <img src={logo} alt='logo' className='w-32 h-32 p-4' />
    </div>
    </>
  )
}
