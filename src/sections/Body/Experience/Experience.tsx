import React,{useEffect, useState} from 'react';
import {Tab, Nav, Row, Card, CardDeck, Button} from 'react-bootstrap';
import './Experience.scss'
import Bg1 from '../../../assets/Bg1.svg';
import Bg2 from '../../../assets/Bg2.svg';
import Bg3 from '../../../assets/Bg3.svg';
import CHlogo from '../../../assets/CHsmall-logo.png';
import CHFullLogo from '../../../assets/CHLogo.svg';
import myLogo from '../../../assets/Logo.svg';
import SunyLogo from '../../../assets/suny.png';
import SunyFullLogo from '../../../assets/SUNYLogo.jpg';

import {ProjectType, ExperienceType, CodingHubExp, SideProjectExp, SUNYExp} from './Content';
const listExp : ExperienceType[] = [CodingHubExp,SUNYExp, SideProjectExp];
const smallLogos : {[id:string]:string}={
    "":"",
    "coding-hub":CHlogo,
    "suny-platt":SunyLogo,
    "side-projects":myLogo,
}
const fullLogos : {[id:string]:string}={
    "":"",
    "coding-hub":CHFullLogo,
    "suny-platt":SunyFullLogo,
    "side-projects":myLogo,
};
interface ProjectFCProps{
    project:ProjectType,
    key:number
};
interface ExpFCProps{
    anExp:ExperienceType,
    key:number
}
const ProjectFC : React.FC<ProjectFCProps> = ({project, key})=>{
    return(
        <Card key={key}>
            <Card.Body>
                <Card.Title><b>{project["name"]}</b></Card.Title>
                <Card.Subtitle>{project["date"]}</Card.Subtitle>
                {(project["note"])?"DEPLOYED":""}
                <Card.Text>
                    {project["description"]}
                </Card.Text>
                {(project.link)?(<Button>Go</Button>):""}
            </Card.Body>
            <Card.Footer>
                <Row>
                {project.techUsing.map((tech,idx)=>
                    <span className="card-foot" key={idx}>
                        {tech}
                    </span>
                )}
                </Row>
            </Card.Footer>
        </Card>
    )
}
const ExpFC: React.FC<ExpFCProps> = ({anExp,key})=>{
    return(
        <Tab.Pane key={key} eventKey={anExp["key"]}>
            <div className="tab-content-container">
                <Row>
                    <img src={fullLogos[(anExp["key"]||"")]} alt={`${anExp["key"]} full logo`} width="300px" className="ml-auto mr-auto"/>
                </Row>
                <Row>
                    <h3 className="ml-auto mr-auto">
                        {anExp["title"]}
                    </h3>
                </Row>
                <Row>
                    <h4 className="ml-auto mr-auto">
                        {anExp["location"]}
                    </h4>
                </Row>
                <Row>
                    <h5 className="ml-auto mr-auto">
                        {anExp["date"]}
                    </h5>
                </Row>
                <ul>
                    {
                        anExp["bulletPoints"].map((line,idx)=>{
                            return(<li key={idx}>{line}</li>)
                        })
                    }
                </ul>
                <Row>
                    <CardDeck>
                    {(anExp.projects)?(anExp["projects"].map((project,idx)=>(<ProjectFC project={project} key={idx}/>))):""}
                    </CardDeck>
                </Row>
            </div>
        </Tab.Pane>)
}
const listOfBg : string[] = [Bg1,Bg2,Bg3];

const Experience : React.FC = ()=>{
    const [Bg,setBg]=useState(Bg1);
    useEffect(()=>{
        setBg(listOfBg[Math.floor(Math.random()*3)]);
    },[]);
    return(
        <div className='experience' id='experience' style={{
            backgroundImage:`url(${Bg})`,
            backgroundSize:"cover",
            padding:"10px"
        }}>
            <Tab.Container defaultActiveKey="coding-hub">
                <Row>
                    <Nav variant="pills" className="mr-auto ml-auto experience-tabs">
                    {listExp.map((anExp,idx)=>{
                        return(
                        <Nav.Item key={idx}>
                            <Nav.Link eventKey={anExp["key"]}>
                                <img src={smallLogos[(anExp["key"]||"")]} alt={`${anExp["key"]} small logo`} height="24px"/>
                                {anExp["name"]}                                                                                            
                            </Nav.Link>
                        </Nav.Item>)
                    })}
                    </Nav>
                </Row>
                <Row>
                    <Tab.Content className="ml-auto mr-auto" >
                    {listExp.map((anExp,idx)=><ExpFC anExp={anExp} key={idx}/>)}
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </div>
    )
};

export default Experience;