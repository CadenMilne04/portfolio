import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Projects />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App