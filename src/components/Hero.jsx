import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef(); 
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 1.0; 
    }, []); 
  return (
    <section id= "hero">
        <div>
          

            
        </div>
        <video ref = {videoRef} src = "/videos/hero.mov" autoPlay muted playsInline> </video>
        <button> <a href = "#contact"> Join </a>  </button>
        <p>Do you want to be part of the Elite?</p>
        
        
        </section>
  )
}

export default Hero