import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'; 
const Showcase = () => {
// Showcasing Raging Rho chapter, who we are at Duke, what we do...
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
        <br/>
        <br/> 
        <br/> 


        <div className ="content">
            <div className ="wrapper">
                <div className ="lg:max-w-md"> 
                    <h2> Established 1995 </h2> 

                    <div className="space-y-5 mt-7 pe-10"> 
                        <p> Introducing {" "} the
                        <span style={{color: '#EEAA00'}}> Raging Rho Chapter </span>  of 
                        <span style={{color: '#EEAA00'}}> La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.
                            </span>, the premier Latino Fraternity at Duke University. 
                        
                        </p>
                        <p> 
                            In Spring 1995, seven visionary gentlemen established the Rho Chapter at Duke, bringing a new type 
                            of organization to campus—one dedicated to uniting students and serving not only the Latino community, 
                            but any under-represented group both on and off campus.
                        </p>
                            
                        <p> 
                            <span style={{color: '#EEAA00'}}>Community service</span> has been integral to how we show respect 
                            for our community and environment, from cleaning up areas around campus to facilitating Duke's Latino 
                            Student Recruitment Weekend (LSRW). We’re proud to continue building connections that strengthen Duke’s diverse community and uphold the values of La Unidad Latina.
                        </p>

                        <div>

                        <a 
                            href="https://www.launidadlatina.org/" className="relative inline-block text-[#EEAA00]  transition-colors duration-300 hover:text-[#FFD369] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FFD369] after:transition-all after:duration-300 hover:after:w-full"
                            >
                         Learn more about 1982. 
                         </a>

                        </div>
                        
                       
                        
                        
                     
                        
                            
                       
                        

                    </div>

                </div> 

                <div className="max-w-3xs space-y-14">
                    <div className="space-y-2">
                        <p>Part of</p>
                        <h3>98 chapters</h3>
                        <p>throughout the United States</p>
                    </div>

                    <div className="space-y-2">
                        <p>Since</p>
                        <h3>1995</h3>
                        <p>serving Duke & Durham</p>

                                           
                    </div>
                    <div>
                    <img 
                            src="/rhoold.png" 
                            alt="Rho Chapter" 
                            className="mt-5 rounded-lg object-cover w-full scale-155" />  
                    </div>

                    
                </div>

            </div>
        </div>
    
    </section>

  )
}

export default Showcase