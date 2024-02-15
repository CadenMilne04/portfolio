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
                <div className='flex align-middle mb-0.5 p-0'>
                    <p className='m-0 ml-2 p-0 pt-0.5 align-middle text-sm text-gray-400'>Click to see more on: </p>
                    <img className="m-0 ml-2 w-6 align-middle" src={props.host} alt="" />
                </div>
            </div>
        </a>
    </div>
  )
}

export default Card
