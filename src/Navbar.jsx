import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/index.css'

const Navbar = () => {
    return (
    <>
        <nav class="navbar">
        <div>
            <NavLink to="/"><img className='h-24 w-auto float-left rounded-3xl mt-5 ml-5 contrast-200 invert border-2 border-solid p-2 border-black' src={require('./assets/logo/png/logo-no-background.png')} alt='logo'/></NavLink>
            <ul className='float-right mt-12 mr-5 text-lg'>
                <li className='inline-block ml-7 text-white uppercase'><NavLink to="/features">Features</NavLink></li>
                <li className='inline-block ml-7 text-white uppercase'><NavLink to="/special">Our Special</NavLink></li>
                <li className='inline-block ml-7 text-white uppercase'><NavLink to="/">Contact US</NavLink></li>
                <li className='inline-block ml-7 text-white uppercase'><NavLink to="/">Sign Up</NavLink></li>
        </ul>
        </div>
        
        </nav>
    </>
    )
}

export default Navbar