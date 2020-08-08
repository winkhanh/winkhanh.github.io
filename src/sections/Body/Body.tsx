import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import './Body.scss';
const Body : React.FC = ()=>{
    return(
        <div className='body'>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
        </div>
    )
};

export default Body;