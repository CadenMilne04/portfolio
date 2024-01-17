import React from 'react'

function Card(props) {
  return (
    <div className='m-3'>
        <div className='w-96 h-60 grid grid-cols-2 border-blue-600 border-solid border-2 rounded-lg shadow-lg'>
            <img className='w-full object-cover min-h-0 h-full' src={props.img} alt="" />
            <div className='flex flex-col'>
                <h1 className='m-auto ml-2 text-xl font-bold'>{props.name}</h1>
                <p className='m-auto ml-2'>{props.desc}</p>
                <div className='flex m-auto ml-2' >
                    {props.logos && props.logos.map((item, i) => {
                        return <img width="40" src={item}/>
                    })}
	            </div>
                <a target="_blank" href={props.link} className='m-auto mt-2 ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                    Check It Out!
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card