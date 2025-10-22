import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'; 
const Showcase = () => {

    const isTablet = useMediaQuery({query: '(max-width: 1024px)'}); 

    useGSAP(()=> {
        if(!isTablet){
            const timeline =gsap.timeline({
                scrollTrigger: {

                    trigger: '#showcase', 
                    start: 'top top', 
                    end: 'bottom top', 
                    scrub: true, 
                    pin: true, 
                }
            }); 

            timeline.to('.mask img', {transform: 'scale(1.1)'}).to('.content', {opacity:1, y:0, ease: 'power1.in'}); 

        }
    }, [isTablet])
  return (
    <section id ="showcase">
        <div className ="media">
            <video src="/videos/dukevideo.mp4" loop muted autoPlay playsInline/>
            <div className="mask">
                <img src ="/raging-logo.svg" /> 
                
                
            </div>
        </div>

        <div className ="content">
            <div className ="wrapper">
                <div className ="lg:max-w-md"> 
                    <h2> Established 1995 </h2> 

                    <div className="space-y-5 mt-7 pe-10"> 
                        <p> Introducing {" "} the
                        <span style={{color: '#EEAA00'}}> Raging Rho Chapter </span>  of 
                        <span style={{color: '#EEAA00'}}> La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.
                            </span>, the premier Latino Fraternity at Duke University 
                        . LUL prioritizes
                        
                        </p>
                            
                        <p> 
                        Academic Excellence. 
                        </p>

                        <p> 
                        Cultural Awareness. 
                        </p>

                        <p className="text-primary">  Learn more about 1982. </p>

                    </div>

                </div> 

                <div className="max-w-3xs space-y-14">
                    <div className="space-y-2">
                        <p> With </p>
                        <h3> 98 chapters</h3>
                        <p> throughout the entire United States. </p>
                    </div>

                    <div className="space-y-2">
                        <p> Up to </p>
                        <h3> 70+</h3>
                        <p> Nationalities represented. </p>
                    </div>
                </div>

            </div>
        </div>
    
    </section>

  )
}

export default Showcase