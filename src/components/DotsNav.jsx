import React,{useState} from 'react'
import {SiAboutdotme } from 'react-icons/si'
import {BsFillFileCodeFill } from 'react-icons/bs'
import {MdEmail } from 'react-icons/md'
import {IoIosStarHalf } from 'react-icons/io'
import {IconContext} from 'react-icons'
import './DotNav.scss'

const navData=[
    {name:"Front",icon:<IoIosStarHalf/>},
    {name:"About",icon:<SiAboutdotme/>},
    {name:"Projects",icon:<BsFillFileCodeFill/>},
    {name:"Contact",icon:<MdEmail/>}
]



const DotsNav = ({activeLen, setActiveLen,lenAnimat,setLenAnimat}) => {
    const [showDots, setShowDots] = useState(false)


    return (
    <>
    <div className="nav__switch-container">
    <div className='nav__dot'
        onClick={()=>{
            setTimeout(() => {
            setActiveLen(activeLen===0 ? 1 : 0)

            }, 500);
            setLenAnimat(!lenAnimat)
            }}>
            {activeLen===0 ? "ENG":"ESP"}
    </div>
    <div className='nav__menu-show'
        onClick={()=>{setShowDots(!showDots)}}>
            <div>X</div>
    </div>
    </div>

    <nav className={`${ showDots ?"nav nav__show" :"nav"}`}>
        {
            navData.map((item,index)=>{
                return(
                    <a 
                    href={`#${item.name}`}
                    className='nav__dot'
                    key={index+item.name}
                    >
                        <IconContext.Provider value={{className:'nav__svg'}}>
                        {item.icon}
                        </IconContext.Provider>
                    </a>
                )
            })
        }
    </nav>
    </>
  )
}

export default DotsNav