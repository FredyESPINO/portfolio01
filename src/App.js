import './App.scss';
import React,{useState} from 'react'
import {Front,About,Contact,Projects} from './sections'
import DotsNav from './components/DotsNav';
import len from './constants/lenguaje'


function App() {
const [activeLen, setActiveLen] = useState(0)
const [lenAnimat, setLenAnimat] = useState(false)
const lenguage=len[activeLen]


  return (
    <div className='app'>
    <DotsNav {...{activeLen, setActiveLen,lenAnimat,setLenAnimat}} />
    <Front/>
    <About {...{lenguage,lenAnimat}}/>
    <Projects {...{lenguage,lenAnimat}}/>
    <Contact {...{lenguage,lenAnimat}}/>    
    </div>

  );
}

export default App;
