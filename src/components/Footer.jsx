import { footerLinks } from "../constants/index.js"; 



const Footer = () => {
  return (
    <footer>

      <div className ="info"> 
      <p>
      Dedicated to leadership, academic excellence, cultural awareness, and community service. La Unidad Para Siempre. 
      </p>
      <img src ="/LUL_Logo_Horizontal_Gold.png" alt= "LUL Logo" className="w-20 md:w-30 lg:w-50 h-auto max-w-full"    />
      </div>
      
      <hr /> 

      <div className ="links"> 
        <p> © 2025 La Unidad Latina, Lambda Upsilon Lambda Fraternity Inc., All Rights Reserved. </p>

        <ul>
          {footerLinks.map(({label, link}) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer