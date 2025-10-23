import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { performanceImages, performanceImgPositions } from "../constants";
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
    const isMobile =useMediaQuery({ query: '(max-width: 1024px)'}); 
    const sectionRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth <= 1024;

   

    gsap.fromTo(".content p", {
      opacity: 0,
      y: 10}, 
      { opacity: 1, y: 0, duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.content p',
        start: 'top bottom', 
        end: 'top center', 
        scrub: true,
        invalidateOnRefresh: true, 
      }, 
    });

    // Desktop only: Image timeline with scrubbed scroll
    if(isMobile) return; 
    
   
      const tl = gsap.timeline({
        defaults : {ease: "power1.inOut", duration: 2, overwrite: "auto"}, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          invalidateOnRefresh: true, 
        }
      });


      // Apply all image animations at time 0, skipping p5
      performanceImgPositions.forEach((position) => {
        
        if (position.id === 'p5') return; // Skip p5

        const toVars ={}; 
        if(position.left!==undefined) toVars.left = `${position.left}%`; 
        if(position.right!==undefined) toVars.right = `${position.right}%`; 
        if(position.bottom!==undefined) toVars.bottom = `${position.bottom}%`; 
        if(position.transform!==undefined) toVars.transform = position.transform; 


        tl.to(`.${position.id}`, toVars, 0); // All animations at time 0
      });
    
    },{scope: sectionRef, dependencies : [isMobile]});
    
    
  return (
    <section id="performance" ref={sectionRef}>
      <h2>
        Be part of something great. Something ELITE.
      </h2>
      <div className="wrapper">
        {performanceImages.map(({id, src}) => (
          <img key={id} src={src} alt={id} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
          La Unidad Latina, Lambda Upsilon Lambda Fraternity, Incorporated primarily seeks to take a leadership role in
          meeting the needs of the Latino community through
          {' '} <span className="text-white"> academic achievement, cultural awareness, community service and promotion of the Latino culture and people.</span>
          {' '}
         
        </p>
      </div>
    </section>
  ); 
}

export default Performance