import React from 'react'

function NavBar() {
  return (
    <div className='grid grid-cols-2 h-20 px-6'>
        <div className='flex justify-start'>
            <h4 className=' text-2xl my-auto font-extrabold'>
                Welcome 👋
            </h4>
        </div>

        <div className='flex justify-end'>
            <button className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Home
            </button>
            
            <button className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Projects 
            </button>
    
            <button className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Technologies 
            </button>

            <button className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                About
            </button>

            <button className='m-0 text-blue-600 hover:text-blue-400 font-bold py-2 px-4'>
                Contact
            </button>
        </div>

    </div>
  )
}

export default NavBar