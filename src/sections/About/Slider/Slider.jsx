import React,{useState,useEffect} from 'react'
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'
import "./Slider.scss"

import html from '../../../assets/html.png'
import javascript from '../../../assets/javascript.png'
import react from '../../../assets/r.png'
import css from '../../../assets/css.png'
import { IconContext } from 'react-icons'


const data =[
    {name:'HTML',image:html},
    {name:'CSS',image:css},
    {name:'Javascript',image:javascript},
    {name:'React',image:react}
]

const Slider = () => {
const [tecs, setTecs] = useState(data)
const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = tecs.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, tecs]);




    return (
    <div className='slider__container'>

        <div className='slider__button'
        onClick={()=>setIndex(index-1)} > 
        <IconContext.Provider value={{className:'slider__svg'}}>
        <AiOutlineCaretLeft />
        </IconContext.Provider>
        </div>

        <div className='slider__item-cont'>
            {
                tecs.map((item,itemIndex)=>{
                    const {image,name}=item
                    let position="next"
                    if(index ===itemIndex){
                        position="active"
                    }
                    if(
                        itemIndex === index - 1 ||
                        (index === 0 && itemIndex === tecs.length - 1)
                    ){
                        position = 'last';
                    }
                    return(
                        <div 
                        className={`${position} slider_cont`} 
                        key={itemIndex}
                        >
                            <img src={image} alt="tec img" className='slider__img'/>
                            <p>{name}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className='slider__button'
            onClick={()=>setIndex(index+1)}>
        <IconContext.Provider value={{className:'slider__svg'}}>
            <AiOutlineCaretRight />
        </IconContext.Provider>
        </div>
    </div>
  )
}





export default Slider