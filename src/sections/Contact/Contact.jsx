import React,{useRef,useEffect,useState} from 'react'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {IconContext} from 'react-icons'

import './Contact.scss'


const Contact = ({lenguage,lenAnimat}) => {
  const {contact:{title,placeholder:{name,subject,email,message},button,miGithub,miLinkedin}}=lenguage
  const [animateCard, setAnimateCard] = useState({opacity:1})
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dmzdtmj', 'template_c7h5ah9', form.current, 'LSccLrjotWFB_bJ88')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    useEffect(() => {
    setAnimateCard({opacity:0})
    setTimeout(()=>{
      setAnimateCard({opacity:1})
    },500)
  }, [lenAnimat])

  return (
    <>
    <div className="waves__spaces waves__backGroundBottom" />
    <section  
    id='Contact' 
    className='app__container'
    >
      <div className='contact__container'>
        <motion.h1 animate={animateCard}className="head-text">{title} </motion.h1>

      <div className='contact__items-cont'>
        <div className='contact__links'>
        
        <div className="links_container">
        <div className="link">
        <IconContext.Provider value={{className:'contact__svg'}}>
          <BsGithub />
        </IconContext.Provider>
        <motion.p animate={animateCard} >
          {miGithub}
        </motion.p>
        </div>

        <div className="link">
        <IconContext.Provider value={{className:'contact__svg'}}>
          <BsLinkedin />
        </IconContext.Provider>
        <motion.p animate={animateCard}>
          {miLinkedin}
        </motion.p>
        </div>
        </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact__item contact__form'>
        <motion.input name='name' type="text" placeholder={name} required animate={animateCard}/> 

          <motion.div style={{height:'1px',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
          initial={{opcity:0,width:'0px'}}
          whileInView={{opcity:1,width:'90%',justifySelf:'baseline',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
          transition={{ease:'easeIn',duration:1}}
          ></motion.div>
        
        <motion.input name='subject' type="text" placeholder={subject} required animate={animateCard}/>
        
          <motion.div style={{height:'1px',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
          initial={{opcity:0,width:'0px'}}
          whileInView={{opcity:1,width:'90%',justifySelf:'baseline',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
          transition={{ease:'easeIn',duration:1}}
          ></motion.div>

        <motion.input name='email' type="email"  placeholder={email} required animate={animateCard}/>
        
          <motion.div style={{height:'1px',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
          initial={{opcity:0,width:'0px'}}
          whileInView={{opcity:1,width:'90%',justifySelf:'baseline',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
          transition={{ease:'easeIn',duration:1}}
          ></motion.div>
          
          
          <motion.textarea name='message' cols="30" rows="10" required placeholder={message} animate={animateCard}>
          </motion.textarea>
        <motion.button animate={animateCard}>{button}</motion.button>
        </form>
        
      </div>

      </div>
      </section>
      </>
  )
}

export default Contact