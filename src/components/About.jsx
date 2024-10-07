import React from 'react'

function About() {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='m-auto my-6 font-bold text-3xl'>👇 About Me 👇</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 mb-6'>
            <img className="w-96 rounded-full m-auto" src="/headshot.png" alt="" />
            <div className='p-5 flex flex-col justify-center'>
                <h1 className='m-2 text-2xl font-semibold'>👋 Hello! My name is Caden Milne!</h1>
                <h1 className='m-2 text-2xl font-semibold'>💼 Intern at Carnegie Mellon's Software Engineering Institute</h1>
                <h1 className='m-2 text-2xl font-semibold'>👨‍🎓 Studying Computer Science at the <span className='text-blue-600'>University of Pittsburgh</span>.</h1>
                <h1 className='m-2 text-2xl font-semibold'>🙋‍♂️<span className='text-blue-600'>Highly motivated</span>, I strive to <span className='text-blue-600'>make an impact</span> on any team that I work with.</h1>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 justify-center'>
            <div className="w-1/2 h-4/5 m-auto">
              <img src="/SHFirstPlace.jpg" alt="First Place" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="w-1/2 h-4/5 m-auto">
              <img src="/SHSpeaking.jpeg" alt="Speaking" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className='p-5 flex flex-col justify-center'>
                <h1 className='m-2 text-2xl font-semibold'>💻 SteelHacks XI Hackathon Winner</h1>
                <h1 className='m-2 text-2xl font-semibold'>🏆 1st Place over 350+ participants</h1>
                <h1 className='m-2 text-2xl font-semibold'>🧑‍💻 Google affiliated</h1>
                <h1 className='m-2 text-2xl font-semibold'>👨Solo Developer</h1>
            </div>
        </div>
    </div>
  )
}

export default About
