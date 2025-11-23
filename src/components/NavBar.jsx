import React from 'react'
import { navLinks, shoppingLink } from '../constants'
const NavBar = () => {
  return (
   <header>
    <nav> 
       <a href = "#home"> <img src ="/LUL_Logo_Horizontal_Gold.png" alt= "LUL Logo" className="w-20 md:w-30 lg:w-50 h-auto max-w-full"  /> </a> 
        <ul>
            {navLinks.map(({ label, link }) => (
                <li key = {label}> 
                    <a href = {link} > {label} </a>
                </li>
            ))}
        </ul>

        <div className = "flex-center gap-3">
        <a 
      href={shoppingLink} 
      className="flex items-center gap-2 text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
    >
        <span className="hidden md:block">Shop</span>
        <img src="/cart.svg" alt="Cart"/>
    </a>
        </div>

    </nav>
   </header>
  )
}

export default NavBar