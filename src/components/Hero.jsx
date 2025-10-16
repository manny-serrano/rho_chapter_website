import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef(); 
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 1.5; 
    }, []); 
  return (
    <section id= "hero">
        <div>
          

            
        </div>
        <video ref = {videoRef} src = "/videos/hero.mov" autoPlay muted playsInline> </video>
        <button> Join </button>
        <p>Do you want to be part of the Elite?</p>
        
        
        </section>
  )
}

export default Hero