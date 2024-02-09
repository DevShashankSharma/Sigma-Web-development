import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex justify-between list-none bg-slate-900 text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Blog</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Navbar
