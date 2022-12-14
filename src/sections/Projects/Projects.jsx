import React,{useEffect,useState} from 'react'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {IconContext} from 'react-icons'


import './Projects.scss'
// const projects =[
//   {img:"",github:"",deploy:"",titulo:"",desc:""},
//   {img:"",github:"",deploy:"",titulo:"",desc:""},
//   {img:"",github:"",deploy:"",titulo:"",desc:""},
//   {img:"",github:"",deploy:"",titulo:"",desc:""},
// ]


const Project = ({lenguage,lenAnimat}) => {
  const {projects:{title}}=lenguage
  const [animateCard, setAnimateCard] = useState({opacity:1})
  

  useEffect(() => {
    setAnimateCard({opacity:0})
    setTimeout(()=>{
      setAnimateCard({opacity:1})
    },500)
  }, [lenAnimat])
  

  return (
    <motion.div 
    id='Projects' 
    className='app__container app_BlackBack'
   
    >
      <motion.div
        className='project__container'
        whileInView={{y:[100,50,0],opacity:[0,0,1]}}
        transition={{duration:0.5}}
        >
        <motion.h1
         animate={animateCard}
         transition={{duration:0.5}}
        className='head-text'
        >{title}</motion.h1>
        
        <motion.div
              transition={{duration:0.25,staggerChildren:0.5}}
              className='pro__portfolio'
              >
        {
          lenguage.projects.projects.map((item,index)=>{
            return(
              <motion.div key={item+index}>
          <div className="pro__item-container">
            <div className="pro__item-img">
              <img src={item.img} alt="" />

              <motion.div
              whileHover={{opacity:[0,1]}}
              transition={{duration:0.25,ease:'easeInOut',staggerChildren:0.5}}
              className='pro__item-hover'
              >
                <a  target="_blank" href={item.link} rel="noreferrer">
                  <motion.div
                  whileInView={{scale:[0,1]}}
                  whileHover={{scale:[1,0.9]}}
                  transition={{duration:0.25}}
                  >
                  <IconContext.Provider value={{className:'pro__svg'}}>
                    <AiFillEye />
                  </IconContext.Provider>
                  </motion.div>
                </a>
                <a  target="_blank" href={item.githubLink} rel="noreferrer">
                  <motion.div
                  whileInView={{scale:[0,1]}}
                  whileHover={{scale:[1,0.9]}}
                  transition={{duration:0.25}}
                  >
                  <IconContext.Provider value={{className:'pro__svg'}}>
                    <AiFillGithub />
                  </IconContext.Provider>
                  </motion.div>
                </a>

              </motion.div>
            </div>
            <div className="pro__item-texts">
              <motion.h4 className="bold-text"
              animate={animateCard}
              transition={{duration:0.5}}
              >{item.titulo}</motion.h4>
              <motion.p 
                animate={animateCard}
                transition={{duration:0.5}}
                className="p-text">
                {item.desc}
                </motion.p>

            </div>

          </div>
        </motion.div>
            )
          })
        }
        </motion.div>
      </motion.div>



    </motion.div>
  )
}

export default Project