import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import Event from './Event/Event';
import './Body.scss';
const Body : React.FC = ()=>{
    return(
        <div className='body'>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
            <Event/>
        </div>
    )
};

export default Body;