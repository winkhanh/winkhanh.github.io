import React,{useState, useEffect, ChangeEvent} from 'react';
import {Form, Row} from 'react-bootstrap';
import Bg1 from '../../../assets/Bg1.svg';
import Bg2 from '../../../assets/Bg2.svg';
import Bg3 from '../../../assets/Bg3.svg';
import listOfEvents,{EventPointType} from './Content';
import './Event.scss';
const listOfBg : string[] = [Bg1,Bg2,Bg3];

const Event:React.FC = ()=>{
    const [Bg,setBg]=useState(Bg1);
    const [sliding1,setSliding1]=useState(50);
    const [sliding2,setSliding2]=useState(50);
    const handleSlide1 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        let val:number=parseInt(e.target.value);
        setSliding1(val);
        setSliding2(prev=> Math.max(val,prev));
    }
    const handleSlide2 = (e: React.ChangeEvent<HTMLInputElement>)=>{
        let val:number=parseInt(e.target.value);
        setSliding2(val);
        setSliding1(prev=> Math.min(val,prev));
    }
    const scaleDown = (val:number)=>{
        return Math.floor(val*listOfEvents[listOfEvents.length-1].value/100);
    }
    const getEventAt = (val:number)=>{
        let value=scaleDown(val);
        for (let i=0;i<listOfEvents.length;i++){
            if (listOfEvents[i].value>=value){
                if (listOfEvents.length-1 === i) return listOfEvents[i];
                if (listOfEvents[i+1].value - value < value - listOfEvents[i].value) return listOfEvents[i+1];
                return listOfEvents[i];
            }
        }
        return listOfEvents[listOfEvents.length-1];
    }
    useEffect(()=>{
        setBg(listOfBg[Math.floor(Math.random()*3)]);
    },[]);
    return(
    <div className='event' id='event' style={{
        backgroundImage:`url(${Bg})`,
        backgroundSize:"cover",
        padding:"50px"}}>
        <Form>
        <Form.Group controlId="formBasicRange">
            <Row>
                <Form.Label className='mr-auto'>2017</Form.Label>
                <Form.Label>{`${getEventAt(sliding1).time} - ${getEventAt(sliding2).time}`}</Form.Label>
                <Form.Label className='ml-auto'>2020</Form.Label>
            </Row>
            <Form.Control type="range" onChange={handleSlide1} value={sliding1}/>
            <Form.Control type="range" onChange={handleSlide2} value={sliding2}/>
            <Row className='event-list'>
                <div className="ml-auto mr-auto">
                    <ol>
                        {listOfEvents.map((eventPoint,idx)=>{
                            if (eventPoint.value<getEventAt(sliding1).value || eventPoint.value>getEventAt(sliding2).value)
                                return null;
                            return(
                                <li key={idx}>
                                    <b>{`${eventPoint.time} :`}</b>
                                    <ul>
                                        {eventPoint.events.map((event,idx)=><li key={idx}>{event}</li>)}
                                    </ul>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </Row>
        </Form.Group>
        </Form>
    </div>)
}

export default Event;