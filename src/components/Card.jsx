import React from 'react'

function Card(props) {
  return (
    <div className='m-3'>
        <a target='_blank' href={props.link} className='w-96 cursor-pointer h-60 grid grid-cols-2 border-blue-600 border-solid border-2 rounded-lg shadow-lg hover:scale-105'>
            <img className='w-full object-cover min-h-0 h-full' src={props.img} alt="" />
            <div className='flex flex-col'>
                <h1 className='m-auto ml-2 text-xl font-bold'>{props.name}</h1>
                <p className='m-auto ml-2'>{props.desc}</p>
                <div className='flex m-auto ml-2' >
                    {props.logos && props.logos.map((item, i) => {
                        return <img width="40" src={item}/>
                    })}
	            </div>
                <p className='m-auto ml-2 text-sm text-gray-400'>Click to learn more!</p>
            </div>
        </a>
    </div>
  )
}

export default Card
