import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const Contact = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'}); 



  return (
    <section id="contact" className="container mx-auto px-5 py-20">

      <div>
      <h1 className ="text-[#EEAA00] font-semibold text-3xl lg:text-6xl text-center" > Contact Us</h1>

      </div>
      
      <h2 className = "text-white text-center"> We want to get to know you more. </h2>



    </section>
  )
}

export default Contact

