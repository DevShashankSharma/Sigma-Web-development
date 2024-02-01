import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert("Color was changed")
    }, [color])
    
    // Example of clean up function
    useEffect(() => {
        alert("this is an return useEffect function")
      
        // return fuction is an clean up function
        return () => {
          alert("component was unmounted")
        }
      }, [])
  return (
    <div>
      I am a Navbar of {color} color
    </div>
  )
}

export default Navbar
