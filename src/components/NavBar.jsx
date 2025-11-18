import React from 'react'
import { navLinks, shoppingLink } from '../constants'
const NavBar = () => {
  return (
   <header>
    <nav> 
       <a href = "#hero"> <img src ="/LUL_Logo_Horizontal_Gold.png" alt= "LUL Logo" className="w-20 md:w-30 lg:w-50 h-auto max-w-full"  /> </a> 
        <ul>
            {navLinks.map(({ label, link }) => (
                <li key = {label}> 
                    <a href = {link} > {label} </a>
                </li>
            ))}
        </ul>

        <div className = "flex-center gap-3">
            <button> 
                <img src = "/search.svg" alt = "Search"/>
            </button>
            <a href={shoppingLink} className="cursor-pointer">
                <img src = "/cart.svg" alt = "Cart"/>
            </a>
        </div>

    </nav>
   </header>
  )
}

export default NavBar