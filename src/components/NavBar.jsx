import React, { useState, useRef } from 'react'
import HamburgerNav from './HamburgerNav'

function NavBar(props) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

  return (

    <nav className='grid grid-cols-2 h-20 bg-white shadow-md rounded-b-lg px-6 fixed top-0 w-full z-10'>
        <div className='flex justify-start'>
            <h4 className=' text-2xl my-auto font-extrabold'>
                Welcome 👋
            </h4>
        </div>

        <div className='flex justify-end align-middle'>

        <div className='flex justify-end fullnav'>
            <button onClick={() => {
                props.hRef.current.scrollIntoView({behavior: "smooth"});
            }}className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Home
            </button>
            
            <button onClick={() => {
                props.pRef.current.scrollIntoView({behavior: "smooth"});
            }} className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Projects 
            </button>
    
            <button onClick={() => {
                props.sRef.current.scrollIntoView({behavior: "smooth"});
            }}className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Skills 
            </button>

            <button onClick={() => {
                props.aRef.current.scrollIntoView({behavior: "smooth"});
            }}className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                About
            </button>

            <button onClick={() => {
                props.cRef.current.scrollIntoView({behavior: "smooth"});
            }}className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Contact
            </button>
        </div>

        <div className='m-0 py-6' onClick={toggleHamburger}>
            <HamburgerNav pRef={props.pRef} sRef={props.sRef} hRef={props.hRef} aRef={props.aRef} cRef={props.cRef}/>
        </div>
        </div>
        
    </nav>

  )
}

export default NavBar