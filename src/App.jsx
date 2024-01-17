import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Projects />
      <Technologies />
      <About />
    </div>
  )
}

export default App