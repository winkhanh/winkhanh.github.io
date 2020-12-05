import React,{useState} from 'react';
import './Visualizer.scss';
import {Form} from 'react-bootstrap';
import Sorting from './Sorting/Sorting';
const listOfSortingAlgorithms:Array<string>=[
    "selection_sort",
    "bubble_sort",
    "insertion_sort",
    "shell_sort",
    "quick_sort",
    "random_quick_sort",
    "heap_sort",
    "merge_sort",
    "bogo_sort"
];
const Visualizer : React.FC = ()=>{
    const [delay,setDelay]=useState(10);
    const [atSameTime,setAtTheSameTime]=useState(true);
    const [run,setRun]=useState(false);
    
    return (
        <div className='visualizer'>
            <h1>Sorting Algorithms</h1>
            <Form>
                <Form.Label>Delay time (ms):</Form.Label>
                <Form.Control onChange={(e)=>{setDelay(parseInt(e.target.value));}}type="number" value={delay}/>
            </Form>
            <Sorting delay={delay} running={run} atTheSameTime={atSameTime}/>
            
        </div>
    )
};

export default Visualizer;
