import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
 
const Highlights = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'}); 

  useGSAP(() =>{
      gsap.to(['.left-column', '.right-column'], {
        scrollTrigger: {
          trigger: '#highlights', 
          start: isMobile ? 'bottom bottom' : 'top top'
        }, 
        y: 0, 
        opacity: 1, 
        stagger: 0.5, // stagger each card by 0.5 seconds
        duration: 1, 
        ease: 'power1.inOut'


      }); 

  })
  return (
    <section id="highlights">
      <h2 className="text-[#EEAA00]"> Our legacy. </h2>
      <h3> Lambda Facts </h3> 
      <div className ="masonry">
          <div className ="left-column">
            <div>
            <br/>
            <br/>
            <br/>
              <p> <span style={{color: '#EEAA00'}}>Our Fraternal Motto:</span> "La Unidad Para Siempre" </p>
            </div> 

            <div>
            <img src ="/crestlogo.png" alt="Fraternal Crest" className="w-10 md:w-15 lg:w-25 h-auto max-w-full"/> 
 
             
              <p> Our Fraternal Colors: <br/>  <span style={{color: '#653819'}}>Brown</span>,  <span style={{color: '#EEAA00'}}>Gold</span>, <span style={{color: '#CC0000'}}>Red</span>  <br/> and White.</p>

            </div> 

          </div>

          <div className ="right-column">
          
            <div className ="apple-gradient">
              <img src ="/goodnetwork.svg" alt="Network" className="w-10 md:w-15 lg:w-25 h-auto max-w-full"/> 
              <p><span>Elite Alumni</span><br/>Network at 9 of the <span> top 10 U.S. colleges</span></p>     
                     </div> 

            <div> 
             
              <img src ="/academiccap.svg" alt="Gradiation Cap" className="w-10 md:w-15 lg:w-25 h-auto max-w-full"/> 
              <p> Only  Latino Fraternity to be chartered <span className ="red-gradient"> {' '} at all Ivy League Universities</span>.
               </p>
              
            </div> 

          </div>
      </div> 



    </section>
  )
}

export default Highlights