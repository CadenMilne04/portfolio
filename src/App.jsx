import React, { useRef } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const projectsRef = useRef(null);
  const heroRef = useRef(null);
  const skillsRef= useRef(null);
  const aboutRef= useRef(null);
  const contactRef= useRef(null);

  return (
    <div>
      <NavBar pRef={projectsRef} sRef={skillsRef} hRef={heroRef} aRef={aboutRef} cRef={contactRef}/>
      <p ref={heroRef}></p>
      <Hero/>
      <p ref={projectsRef}></p>
      <Projects />
      <p ref={skillsRef}></p>
      <Technologies/>
      <p ref={aboutRef}></p>
      <About />
      <p ref={contactRef}></p>
      <Contact />
      <Footer />
    </div>
  )
}

export default App