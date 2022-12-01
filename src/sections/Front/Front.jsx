import React from 'react'
import {motion} from 'framer-motion'
import Blob from './Blob'
import "./Front.scss"



const Front = () => {
  return (
    <>
    <motion.div 
    id='Front' 
    className='app__container'
    whileInView={{y:[100,50,0],opacity:[0,0,1]}}
    transition={{duration:0.5}}
    > 
    <div className="front__container">
      <div className="front__texts">
      <h1>
        Juan Espino.
      </h1>
      <p>
        Front end trainee
      </p>
      </div>

  
    <Blob blobWith={600} color={"#001122"}/>

    </div>

      
    </motion.div>
    <div className="waves__spaces waves__backGroundTop" />
    </>

  )
}

export default Front