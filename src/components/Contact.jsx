import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='m-auto my-6 font-bold text-3xl'>👇 Contact Me 👇</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center gap-4'>
            <div className='flex flex-col gap-4'>
                <a target="_blank" href="mailto:CadenMilne04@gmail.com" className='grid grid-cols-1 m-auto text-lg font-semibold'>
                  <img className="m-auto w-1/4 sm:w-1/2" src="/GmailLogo.png" alt="" />
                  <p className='m-auto'>Email: CadenMilne04@gmail.com</p>
                </a>
                
                <a target="_blank" href="https://www.linkedin.com/in/cadenmilne04/" className='grid grid-cols-1 m-auto text-lg font-semibold'>
                  <img className="m-auto w-1/4 sm:w-1/2" src="/LinkedInLogo.png" alt="" />
                  <p className='m-auto'>LinkedIn: CadenMilne04</p>
                </a>
            </div>
            <div className='flex flex-col gap-4 justify-center'>
                
                <a target="_blank" href="https://github.com/CadenMilne04"  className='grid grid-cols-1 m-auto text-lg font-semibold'>
                  <img className="m-auto w-1/4 sm:w-1/2" src="/GitHubLogo.png" alt="" />
                  <p className='m-auto'>GitHub: CadenMilne04</p>
                </a>
                
                <a target="_blank" href="https://leetcode.com/CadenMilne/"  className='grid grid-cols-1 m-auto text-lg font-semibold'>
                  <img className="m-auto w-1/4 sm:w-1/2" src="/LeetCodeLogo.png" alt="" />
                  <p className='m-auto'>LeetCode: CadenMilne</p>
                </a>
            </div> 
        </div>
    </div>
  )
}

export default Contact