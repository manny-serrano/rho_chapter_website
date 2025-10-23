import Hero from "./components/Hero"; 
import NavBar from "./components/NavBar"; 
import ProductViewer from "./components/ProductViewer"; 
import gsap from 'gsap'; 
import {ScrollTrigger, SplitText} from "gsap/all"; 
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Highlights from "./components/Highlights";

gsap.registerPlugin(ScrollTrigger) 


const App = () => {
  return (
    <main> 

        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase /> 
        <Performance />
        <Features />
        <Highlights /> 

        
    </main>
  )
}

export default App