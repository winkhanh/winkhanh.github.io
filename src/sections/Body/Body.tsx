import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Experience from './Experience/Experience';

const Body : React.FC = ()=>{
    return(
        <div>
            <Home/>
            <About/>
            <Experience/>
        </div>
    )
};

export default Body;