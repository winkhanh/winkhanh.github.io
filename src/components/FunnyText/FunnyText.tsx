import React from 'react';
import './FunnyText.scss';
interface FTProps{
    children:string,
    show?:boolean,
    mdOnly?:boolean
}
const FT : React.FC <FTProps> = ({children,show, mdOnly})=>{
    
    return(
        <h1 className={`funny-text ${(show)?"":"funny-text-hidden"} ${mdOnly?"md-only":""}`}><span className={"first-letter"}>{children.slice(0,1)}</span><span className={"following-letters"}>{children.slice(1)}</span></h1>
    )
}

export default FT;