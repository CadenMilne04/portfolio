import React, { useRef } from 'react'
import { motion } from 'framer-motion'

function Technologies() {
  //animate
  const scrollRef = useRef(null)
  const v = {
    offscreen: {
      x: -1500
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: .5
      }
    }
  };


  return (
    <div ref={scrollRef} style={{ overflow: "" }} className='flex flex-col justify-center align-middle'>
      <h1 className='m-auto mb-12 font-bold text-3xl'>👇 Skills 👇</h1>
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
      >
 
        <motion.div variants={v} className='flex flex-col pb-12 justify-center align-middle'>
        <h1 className='m-auto font-semibold text-2xl'>Languages</h1>

          <div className='m-auto mt-8 w-1/2 flex flex-wrap justify-center gap-5'>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="Java" title="Java"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png" alt="C" title="C"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/192599922-3a8ceb1c-ff1d-40bc-b73c-99ea1182d8ad.png" alt="Python" title="Python"/>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
      >
        <motion.div variants={v} className='flex flex-col pb-12 justify-center align-middle'>
          <h1 className='m-auto font-semibold text-2xl'>Web Development Tools</h1>

          <div className='m-auto mt-8 w-3/4 flex flex-wrap justify-center gap-5'>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
      >

        <motion.div variants={v} className='flex flex-col pb-12 justify-center align-middle'>
          <h1 className='m-auto font-semibold text-2xl'>Other Tools</h1>

          <div className='m-auto mt-8 w-3/4 flex flex-wrap justify-center gap-5'>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/192108889-232b3431-a585-4b36-a62d-9078bd3641d9.png" alt="Vim" title="Vim"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183914128-3fc88b4a-4ac1-40e6-9443-9a30182379b7.png" alt="Jupyter Notebook" title="Jupyter Notebook"/>
            <img width="80" src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35" alt="Vite" title="Vite"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png" alt="AWS" title="AWS"/>
            <img width="80" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="TensorFlow" title="TensorFlow"/>
            <img width="80" src="https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa" alt="Linux" title="Linux"/>
          </div>
        </motion.div>
      </motion.div> 
    </div>
  )
}

export default Technologies
