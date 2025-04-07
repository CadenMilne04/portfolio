import React, { useRef } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carosel from "./components/Carosel";

function App() {
    const projectsRef = useRef(null);
    const heroRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div>
            <NavBar
                pRef={projectsRef}
                sRef={skillsRef}
                hRef={heroRef}
                aRef={aboutRef}
                cRef={contactRef}
            />
            <Carosel />
            <p ref={heroRef}></p>
            <Hero />
            <p className="h-24" ref={projectsRef}></p>
            <Projects />
            <p className="h-24" ref={skillsRef}></p>
            <Technologies />
            <p className="h-24" ref={aboutRef}></p>
            <About />
            <p className="h-24" ref={contactRef}></p>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
