import React from 'react'

function About() {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='m-auto my-6 font-bold text-3xl'>👇 About Me 👇</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 mb-6'>
            <img className="w-96 m-auto" src="/headshot.png" alt="" />
            <div className='p-5 flex flex-col justify-center'>
                <h1 className='m-2 text-2xl font-semibold'>👋 Hello! My name is Caden Milne!</h1>
                <h1 className='m-2 text-2xl font-semibold'>👨‍🎓 I am a studying Computer Science at the <span className='text-blue-600'>University of Pittsburgh</span>.</h1>
                <h1 className='m-2 text-2xl font-semibold'>🙋‍♂️I am <span className='text-blue-600'>highly motivated</span>. I strive to <span className='text-blue-600'>make an impact</span> on any team that I work with.</h1>
            </div>
        </div>
    </div>
  )
}

export default About
