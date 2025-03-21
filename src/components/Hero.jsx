import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'

function Hero() {
    //Make the model spin
    const MyModel = () => {
        const modelRef = useRef();

        useFrame(() => {
            if(modelRef.current){
                modelRef.current.rotation.y += -.005;
            }
        });

        //Model.jsx takes a props.innerRef as a ref
        return(<Model scale={[1.6,1.6,1.6]} innerRef={modelRef} rotation-y={Math.PI * .25}></Model>)
    }

  return (
    <div className='grid grid-cols-1 gap-4 p-8 px-12 sm:grid-cols-2 mt-20 ' style={{height: '84vh'}}>
        <div className='flex justify-center align-middle m-auto'>
            <div className='align-middle'>
                <h1 className='text-6xl font-extrabold'>Caden Milne</h1>
                <h2 className='mb-3 text-4xl font-bold text-blue-600'>Software Engineer</h2>
                <a target="_blank" href="https://drive.google.com/file/d/1027lQHtvp1wHJ5AzLNjGzqTwo0ptdiIB/view" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                    View My Resume
                </a>
            </div>
       </div>
        <div className='sm:h-full cursor-grab' onWheel={(e) => {e.target.blur()}}>
            <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={.8} />
                <spotLight position={[1, 0, 0]} angle={0.15} penumbra={1} />
                <pointLight position={[2, 1, 1]} />
                <MyModel />
            </Canvas>
        </div>
    </div>
  )
}

export default Hero
