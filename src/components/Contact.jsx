import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='m-auto my-6 font-bold text-3xl'>👇 Contact Me 👇</h1>
        <div className='grid grid-cols-2 justify-center'>
            <div className='flex flex-col gap-2'>
                <a className='m-auto text-lg font-semibold'>Email: CadenMilne04@gmail.com</a>
                <a href="https://www.linkedin.com/in/cadenmilne04/" className='m-auto text-lg font-semibold'>LinkedIn: CadenMilne04</a>
            </div>
            <div className='flex flex-col gap-2'>
                <a href="https://github.com/CadenMilne04"  className='m-auto text-lg font-semibold'>GitHub: CadenMilne04</a>
                <a href="https://leetcode.com/CadenMilne/"  className='m-auto text-lg font-semibold'>LeetCode: CadenMilne</a>
            </div> 
        </div>
    </div>
  )
}

export default Contact