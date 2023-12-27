import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App