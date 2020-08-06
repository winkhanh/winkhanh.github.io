import React from 'react';
import Home from './Home/Home';
import About from './About/About';

const Body : React.FC = ()=>{
    return(
        <div>
            <Home/>
            <About/>
        </div>
    )
};

export default Body;