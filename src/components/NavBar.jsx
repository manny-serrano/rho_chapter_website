import React from 'react'
import { navLinks } from '../constants'
const NavBar = () => {
  return (
   <header>
    <nav> 
        <img src ="/LUL_Logo_Horizontal_Gold.png" alt= "LUL Logo" className="w-20 md:w-30 lg:w-50 h-auto max-w-full"  />
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
            <button> 
                <img src = "/cart.svg" alt = "Cart"/>
            </button>
        </div>

    </nav>
   </header>
  )
}

export default NavBar