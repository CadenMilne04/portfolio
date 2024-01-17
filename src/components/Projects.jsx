import React from 'react'
import Card from './Card'

function Projects() {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='m-auto mb-12 font-bold text-3xl'>👇 Projects 👇</h1>
        <div className="flex flex-wrap mb-12 justify-center">
            <Card 
                name = "Workout App" 
                desc="Fully functioning web application with active users to track workout data."
                img="/WorkoutAppImage.png"
                logos={["https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png","https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png","https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png", "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",]}
                link="https://workout-app-ugjg.onrender.com/"
            />
           <Card
                name = 'Dopa-Mirror'
                desc = "AI powered emotion detecting mirror that unlocks when smiled at."
                img="/MyDopaMirrorImage.png"
                logos={["https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png", "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa"]}
                link="https://www.youtube.com/watch?v=0eU8fmNTzb4&ab_channel=CadenMilne"
            />        
            <Card
                name = '"Braille" Phone'
                desc = "Audio based phone designed for the blind. Built with rPI and python + Twilio API."
                img="/MyBlindPhoneImage.png"
                logos={["https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png", "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa"]}
                link="https://www.youtube.com/watch?v=p1zOldm9Yd4&ab_channel=CadenMilne"
            />
            <Card
                name = "My Shell"
                desc = "Linux shell written in C which can and execute user binaries and load custom plugins."
                img="/MyShellImage.png"
                logos={["https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png", "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa"]}
                link="https://github.com/CadenMilne04/my_shell"
            />
            <Card
                name = "My Malloc"
                desc = "Custom implementation of C's malloc written in C."
                img="/MyMallocImage.png"
                logos={["https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png", "https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa"]}
                link="https://github.com/CadenMilne04/my_malloc"
            />
        </div>
        
    </div>
  )
}

export default Projects