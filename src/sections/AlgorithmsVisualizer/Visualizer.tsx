import React from 'react';
import './Visualizer.scss';
import Sorting from './Sorting/Sorting';
const Visualizer : React.FC = ()=>{
    return (
        <div className='visualizer'>
            <Sorting/>
            
        </div>
    )
};

export default Visualizer;
