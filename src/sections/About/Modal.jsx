import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import './Modal.scss'

import EN_main from '../../assets/EN_main.png'
import EN_listen from '../../assets/EN_listen.png'
import EN_read from '../../assets/EN_read.png'

const backdrop={
    visible:{opacity:1,scale:2},
    hidden:{opacity:0},
}

const Modal = ({showModal,setShowModal,activeItem,setActiveItem}) => {
    const activeScroll=()=>{
        document.body.classList.remove("overflow-hidden");
    }

    
    

  return (
    <AnimatePresence>
        {
            showModal &&(
                <motion.section className='backdrop'
                variants={backdrop}
                initial={"hidden"}
                animate={"visible"}
                exit={{opacity:0}}
                transition={{duration:0.5}}
                onClick={()=>{
                    setShowModal(false)
                    activeScroll()
                }}                
                
                >
                    <motion.div className='modal' exit={{opacity:0}}>
                        
                        <div className="modal__eng-cont">
                            <img src={EN_main} alt="main" />
                            <div className='info'>
                                <div className='info-item'>
                                    <img src={EN_read} alt="" />
                                    <p>
                                        Can understand a wide range of  longer texts, and recognize implicit meaning.
                                    </p>
                                </div>
                                <div className='info-item'>
                                    <img src={EN_listen} alt="" />
                                    <p>Can understand with ease any kind of spoken language, live or broadcast.</p>
                                </div>
                            </div>
                        </div>
                        

                    </motion.div>
                </motion.section>
            )
        }
    </AnimatePresence>
  )
}

export default Modal