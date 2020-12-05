import React,{useState, useEffect} from 'react';
import './Sorting.scss';
import {SelectionSort,BubbleSort, InsertionSort, QuickSort, RandomQuickSort, HeapSort, MergeSort, ShellSort, BogoSort} from './Algorithms';
const listOfSortingAlgorithms:Array<[string,Function]>=[
    ["selection_sort",SelectionSort],
    ["bubble_sort",BubbleSort],
    ["insertion_sort",InsertionSort],
    ["shell_sort",ShellSort],
    ["quick_sort",QuickSort],
    ["random_quick_sort",RandomQuickSort],
    ["heap_sort",HeapSort],
    ["merge_sort",MergeSort]
];
let st:Array<number>=[];
for (let i=0;i<10;i++){
    st.push(Math.floor(Math.random()*400));
}
interface SortingProps{
    delay:number,
    running:boolean,
    atTheSameTime:boolean
}
const Sorting : React.FC<SortingProps> = ({delay,running,atTheSameTime}:SortingProps)=>{
    const [turnToStart,setTurn]=useState(0);
    useEffect(()=>{
        
    },[atTheSameTime])
    return (
        <div>
            {listOfSortingAlgorithms.map((algo,idx)=>
            <SortingStateVisualizer
                resultStates={performSort([...st],algo[0])}
                delayTime={delay}
                running={running && (atTheSameTime || (idx===turnToStart))}
                key={idx}
            />)}
            
        </div>
    )
}

interface SortingStateType{
    state:Array<number>,
    comparingIndexes:[number,number],
    comparisionCount:number
}
interface SortingResult{
    states:Array<SortingStateType>,
    comparisionCount:number
}
const performSort = (arr:Array<number>,algorithm:string):SortingResult =>{
    console.log(algorithm);
    let result: Array<SortingStateType>=[{
        state:[...arr],
        comparingIndexes:[-1,-1],
        comparisionCount:0
    }];
    let count:number=0;
    const addState = (arr:Array<number>,x1:number,x2:number,c:number) : void =>{
        count+=c;
        result.push({state:[...arr],comparingIndexes:[x1,x2],comparisionCount:count});
    }
    listOfSortingAlgorithms.forEach((val,idx)=>{
        if (val[0]===algorithm){
            let F:Function=val[1];
            F({initialArr:arr,todoFunction:addState})
        }
    })
    addState([...result[result.length-1].state],-1,-1,0);
    return {states:result,comparisionCount:count};
}
interface SortingStateVisualizerProps{
    resultStates:SortingResult,
    delayTime:number,
    running:Boolean
}
const SortingStateVisualizer : React.FC<SortingStateVisualizerProps> = ({resultStates,delayTime,running})=>{
    const [sortingState,setSortingState]=useState(0);
    const states=resultStates.states;
    useEffect(()=>{
        let id: ReturnType<typeof setTimeout>;
        if (running && sortingState+1<states.length){
            id=setTimeout(() => {
                setSortingState(prev=>prev+1);                
            }, delayTime);
        }
        return ()=>{clearTimeout(id);}
    },[running,states,sortingState,delayTime]);
    if (states.length<=0) return null;
    console.log(states);
    console.log(sortingState);
    const currentArray=states[sortingState].state;
    const currentPair=states[sortingState].comparingIndexes;
    const comparisionCount=states[sortingState].comparisionCount;
    const n=currentArray.length;
    
    return(
        <div>
            <h1>{comparisionCount}</h1>
            <div className='sv'
                style={{
                    display:"grid",
                    gridTemplateColumns: `repeat(${n},1fr)`
                    
                }}
            >
                
                {currentArray.map((val,id)=>{
                    return (<div  key={id} style={{
                        height:`${val}px`,
                        backgroundColor: `${ (id === currentPair[0] || id === currentPair[1])?("red"):("white")}`
                    }}/>);}
                )}
            </div>
        </div>
    )
}
export default Sorting;