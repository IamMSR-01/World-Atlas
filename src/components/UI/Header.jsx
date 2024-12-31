import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {

  return (
    <div className='w-full h-16 bg-gray-800 text-white'>
        <nav className="flex justify-between items-center h-full w-full m-auto xl:w-[100%] xl:mx-4">
            <div className='text-green-500 font-bold text-medium px-2 sm:px-10 md:mx-7 sm:p-4 sm:text-3xl sm:font-extrabold lg:text-4xl'>
                <NavLink to='/'>WorldAtlas</NavLink>
            </div>
            <ul className='justify-center align-middle font-medium text-sm flex sm:text-lg sm:p-5 sm:gap-2 lg:gap-4 lg:text-xl xl:text-2xl lg:mx-6 xl:mr-10'>
                <li>
                    <NavLink 
                        className={({ isActive }) =>
                        `block py-2 pr-2 pl-1 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        } 
                        to='/'>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                     className={({ isActive }) =>
                        `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        } 
                    to='/about'>About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     className={({ isActive }) =>
                        `block py-2 pr-2 pl-2 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        }   
                    to='/country'>Country
                    </NavLink>
                </li>
                <li>
                    <NavLink
                     className={({ isActive }) =>
                        `block py-2 pr-4 pl-2 duration-200 ${isActive ? "text-green-500" : "text-white"}`
                        }  
                    to='/contact'>Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header