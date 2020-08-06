import React,{useState, useEffect} from 'react';
import Bg1 from '../../../assets/Bg1.svg';
import Bg2 from '../../../assets/Bg2.svg';
import Bg3 from '../../../assets/Bg3.svg';

import FunnyText from '../../../components/FunnyText/FunnyText';
import './Home.scss';
const listOfBg : string[] = [Bg1,Bg2,Bg3];
const Home: React.FC = ()=>{
    
    const [displayingText,setDisplayingText]=useState(0);
    const [randomMode,setRandomMode]=useState(false);
    const [Bg,setBg]=useState(Bg1);
    useEffect(()=>{
        setBg(listOfBg[Math.floor(Math.random()*3)]);
    },[])
    
    useEffect(()=>{
        let id : ReturnType<typeof setTimeout> = setTimeout(()=>{
            setRandomMode(prev=>!prev);
        },20000);
        return ()=>{
            clearTimeout(id);
        }
    })
    useEffect(()=>{
        const randomModeFnc = ()=>{
            setDisplayingText(Math.floor(Math.random()*5));
        }
        const linearModeFnc = ()=>{
            setDisplayingText(prev=>(prev+1)%5);
        }
        let id : ReturnType<typeof setTimeout> = setTimeout(
            ((randomMode)?(randomModeFnc):(linearModeFnc))
        ,1000);
        console.log(displayingText);
        return ()=>{
            clearTimeout(id);
        }
    },[displayingText, randomMode])
    return(
        <div style={{
            backgroundImage:`url(${Bg})`,
            backgroundSize:"cover",
            padding:"10px"
        }}
            id="home"
            className='home'
        >
            <FunnyText show={(displayingText===0)}>KHANH LE</FunnyText>
            <FunnyText show={(displayingText===1)}>Hometown in Vietnam</FunnyText>
            <FunnyText show={(displayingText===2)}>A competitive programmer</FunnyText>
            <FunnyText show={(displayingText===3)}>Now, a fullstack dev</FunnyText>
            <FunnyText show={(displayingText===4)}>Hmmmmmmm</FunnyText>
        </div>
    )
}

export default Home;