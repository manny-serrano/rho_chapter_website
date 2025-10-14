import React from 'react'

const NavBar = () => {
  return (
   <header>
    <nav> 
        <img src ="/LUL_Logo_Horizontal_Brown.png" alt= "LUL Logo" className="h-6 w-auto md:h-15" />
        <ul>
            {[
                {label: "Home" }, 
                {label: "History" }, 
                {label: "Rho Chapter" },
                {label: "Join" },
                {label: "Events"},
                {label: "Contact"}

            ].map(({ label }) => (
                <li key = {label}> 
                    <a href = {label} > {label} </a>
                </li>
            ))}
        </ul>
    </nav>
   </header>
  )
}

export default NavBar