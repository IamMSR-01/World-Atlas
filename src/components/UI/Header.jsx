import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {

  const [show, setShow] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    return setShow(show);
  };

  return (
    <div className='w-full h-16 bg-gray-800 text-white'>
        <nav className={`flex justify-between items-center h-full w-[80%] m-auto ${show ? 'menu-mobile' : 'menu-web'}`}>
            <div className='text-green-500 px-10 p-4 text-3xl font-extrabold'>
                <NavLink to='/'>WorldAtlas</NavLink>
            </div>
            <ul className='justify-center align-middle lg:gap-8 gap-2 font-bold text-lg hidden md:flex'>
                <li>
                    <NavLink 
                        className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        } 
                        to='/'>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                     className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        } 
                    to='/about'>About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        }   
                    to='/country'>Country
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        }  
                    to='/contact'>Contact
                    </NavLink>
                </li>
            </ul>
            <div className='text-white md:hidden'>
                <button onClick={() => {toggleMobileMenu}}>
                    <GiHamburgerMenu />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Header