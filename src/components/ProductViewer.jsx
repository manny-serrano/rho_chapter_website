import useMacbookStore from "../store"; 
import clsx from "clsx"; 
import {Canvas} from "@react-three/fiber"; 
import {Box} from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'; 
import { useMediaQuery } from "react-responsive";

//What is LUL, brief history?// 


const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore(); 
    const isMobile = useMediaQuery ({query: '(max-width: 1024px)'}); // checks width whether mobile or tablet
  return (
    <section id ="product-viewer">

        <h2> Take a closer look.</h2>





        <Canvas id="canvas" camera = {{position: [0, 2, 5], fov:50, near: 0.1, far:100}}>
            <StudioLights/>
            

        </Canvas>
    </section>
  )
}

export default ProductViewer