import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import Modal from './Modal'
import Slider from './Slider/Slider'


const About = ({lenguage,lenAnimat}) => {
const{about:{tecs,title,idiom:{idiom_title,idiom_button},info:{info_title}}}=lenguage

const [showModal, setShowModal] = useState(false)
const [animateCard, setAnimateCard] = useState({opacity:1})


    useEffect(() => {
    setAnimateCard({opacity:0})
    setTimeout(()=>{
      setAnimateCard({opacity:1})
    },500)
  }, [lenAnimat])

  return (
    <motion.div 
    id='About' 
    className='app__container app_BlackBack'

    >
        
      <motion.div
        className='about__container'
        whileInView={{y:[100,50,0],opacity:[0,0,1]}}
        transition={{duration:0.5}}
      >
        <motion.h1 className='head-text' animate={animateCard}>{title}</motion.h1>

      <div className='about__items-cont'  >

        <div className="about__item"
        onClick={()=>setShowModal(true)}
        >
          <motion.h3 animate={animateCard}>{info_title}</motion.h3>
          <div className="about__svg" />
        </div>

        <div className="about__item-len">
          <motion.h3 animate={animateCard}>{tecs}</motion.h3>
          <Slider />
        </div>

        <div className="about__item">
          <motion.h3 animate={animateCard}>{idiom_title}</motion.h3>
          <div className="about__img-cont">
          <div className="out_circle">
            <div className="inner_circle">
              <div className="text_circle">
                <p>EF SET</p>
                <p>72/100</p>
                <p>C2 Proficient</p>
              </div>
            </div>
          </div>
          </div>
          <a href="https://www.efset.org/cert/diZnHX" target="_blank" rel="noopener noreferrer">
            <button className='about__button'>
              {idiom_button}
            </button>
          </a>

        </div>

        </div>
      </motion.div>
        
        <Modal {...{showModal,setShowModal,lenguage,lenAnimat}}/> 

    </motion.div>
  )
}

export default About