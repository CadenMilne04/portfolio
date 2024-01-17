import React, { useLayoutEffect, useState } from 'react'

function HamburgerNav(props) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }
  return (
    <>
        <div className='hamburger' onClick={toggleHamburger}>
            <div className='patty bg-blue-600 '></div>
            <div className='patty bg-blue-600 '></div>
            <div className='patty bg-blue-600 '></div>
        </div>
        {hamburgerOpen && 
            <ul className='fixed flex flex-col gap-1 right-2 mt-7 w-36 shadow-lg bg-white rounded-lg'>
                <li onClick={() => {
                props.hRef.current.scrollIntoView({behavior: "smooth"});
                }}className='m-auto text-blue-600 hover:text-blue-400 font-bold'>Home</li>
                <li onClick={() => {
                props.pRef.current.scrollIntoView({behavior: "smooth"});
                }}className='m-auto text-blue-600 hover:text-blue-400 font-bold'>Projects</li>
                <li onClick={() => {
                props.sRef.current.scrollIntoView({behavior: "smooth"});
                }}className='m-auto text-blue-600 hover:text-blue-400 font-bold'>Skills</li>
                <li onClick={() => {
                props.aRef.current.scrollIntoView({behavior: "smooth"});
                }}className='m-auto text-blue-600 hover:text-blue-400 font-bold'>About</li>
                <li onClick={() => {
                props.cRef.current.scrollIntoView({behavior: "smooth"});
                }}className='m-auto text-blue-600 hover:text-blue-400 font-bold'>Contact</li>
            </ul>}

        <style jsx>{`
            .hamburger{
                display: none;
            }

                @media (max-width: 767px){
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }

                .patty{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }

                .fullnav{
                    display: none;
                }
            }

        `}</style>
    </>
  )
}

export default HamburgerNav