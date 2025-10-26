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
      <h2> There's never been a better time to join. </h2>
      <h3> Heres what you get when you do. </h3> 
      <div className ="masonry">
          <div className ="left-column">
            <div>
              <img src ="/laptop.png" alt="Laptop"/> 
              <p> Fly through demanding tasks boi. </p>
            </div> 

            <div>
              <img src ="/sun.png" alt="Sun"/> 
              <p> Stunning <br/> liquid HDR <br/> display.</p>

            </div> 

          </div>

          <div className ="right-column">
            <div className ="apple-gradient">
              <img src ="/ai.png" alt="AI"/> 
              <p> Built for <br/> <span>APPLE Intelligence </span> </p>
            </div> 

            <div>
              <img src ="/battery.png" alt="Battery"/> 
              <p> Up to <span className ="green-gradient"> {' '}14 more hours {' '}</span> of battery life.
               <span className ="text-dark-100">{' '}liquid HDR  display. </span></p>
              
            </div> 

          </div>
      </div> 



    </section>
  )
}

export default Highlights