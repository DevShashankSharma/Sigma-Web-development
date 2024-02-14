import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar flex justify-around items-center px-4 py-2 bg-[#381b52]'>
            <h1 className='text-2xl font-bold text-white flex items-start w-full'>iTask</h1>
            <ul className='flex gap-16 px-10 items-center justify-center w-full'>
                <li className='text-white text-xl font-medium hover:scale-110 cursor-pointer'>Home</li>
                <li className='text-white text-xl font-medium hover:scale-110 cursor-pointer'>About</li>
            </ul>
        </nav>
    )
}

export default Navbar
