import React from 'react'
import { navLinks } from '../constants'
const NavBar = () => {
  return (
   <header>
    <nav> 
        <img src ="/LUL_Logo_Horizontal_Brown.png" alt= "LUL Logo" className="h-6 w-auto md:h-15" />
        <ul>
            {navLinks.map(({ label }) => (
                <li key = {label}> 
                    <a href = {label} > {label} </a>
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