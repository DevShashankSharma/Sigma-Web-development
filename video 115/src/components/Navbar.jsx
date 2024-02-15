import React from 'react' 
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul style={{ display: 'flex' , listStyle: 'none', gap: '20px'}}>
                    <NavLink className={(e) => {return e.isActive?"red":""}} to='/'><li>Home</li></NavLink>
                    <NavLink className={(e) => {return e.isActive?"red":""}} to='/login'><li>login</li></NavLink>
                    <NavLink className={(e) => {return e.isActive?"red":""}} to='/about'><li>about</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar