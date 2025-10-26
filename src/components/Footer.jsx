import { footerLinks } from "../constants/index.js"; 



const Footer = () => {
  return (
    <footer>

      <div className ="info"> 
      <p>
        More ways to get involved, blah blah blah, filler text: jjhfhdfh dhdh. 
      </p>
      <img src ="/LUL_Logo_Horizontal_Brown.png" alt= "LUL Logo" className="h-6 w-auto md:h-15" />
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