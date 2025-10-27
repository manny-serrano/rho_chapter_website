import { Canvas } from "@react-three/fiber"; 
import StudioLights from "./three/StudioLights";
import {featureSequence, features} from "../constants/index.js"; 
import clsx from "clsx"; 
import { Suspense, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Html } from "@react-three/drei"; 
import MacbookModel from "./models/Macbook.jsx";
import useMacbookStore from "../store/index.js";
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TmanModel from "./models/Tmanlogo.jsx";

// Features of LUL, why join? for who // 

gsap.registerPlugin(ScrollTrigger);

const ModelScroll =() => {
    const groupRef =useRef(null); 
    const isMobile =useMediaQuery({query: '(max-width: 1024px)'});
    const {setTexture} = useMacbookStore(); 
    

    useGSAP(() => {
        const modelTimeline = gsap.timeline({

            scrollTrigger: {
                trigger: '#f-canvas', 
                start:'top top', 
                end:'bottom top', 
                scrub: 1, 
                pin: true, 
            }
        }); 

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#f-canvas', 
                start:'top center', 
                end:'bottom top', 
                scrub: 1
                
            }
        }); 

        if(groupRef.current){
            modelTimeline.to(groupRef.current.rotation, {y: Math.PI*2, ease: 'power1.inOut'}) // makes 3d model spin full circle
        }


        // content and texture sync 

        timeline 
            
            .to('.box1', {opacity: 1, y: 0, delay: 1})

          
            .to('.box2', {opacity: 1, y: 0})

            .to('.box3', {opacity: 1, y: 0})

            .to('.box4', {opacity: 1, y: 0})

            //.to('.box5', {opacity: 1, y: 0})

    }, []); 


    return (

        <group ref= {groupRef}>
            <Suspense fallback ={<Html> <h1 className="text-white text-3xl uppercase"> Loading...</h1></Html>}> 
                <TmanModel scale ={isMobile ? 0.5 : 0.8} position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} color="#EEAA00" /> 
            </Suspense>


        </group>
    )
}

const Features = () => {
  return (
    <section id ="features">
        <h2 className="text-[#EEAA00]"> Our Pillars. </h2>

        <Canvas id="f-canvas" camera={{}}> 
            <StudioLights /> 
            <ambientLight intensity={0.5} />
            <ModelScroll /> 

           


        </Canvas>

        <div className ="absolute inset-0" >
            {features.map((feature, index) => (

                <div className={clsx('box',`box${index + 1}`, feature.styles )}>

                    <img src={feature.icon} alt ={feature.highlight}  className="w-16 h-16"/> 

                    <p className ="text-white">

                        <span className ="text-[#EEAA00]">  {feature.highlight} </span>
                        {feature.text}  
                        
                    </p>
                </div>
            ))}
            
        </div> 

    </section>
  )
}

export default Features