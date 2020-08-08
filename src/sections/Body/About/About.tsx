import React, {useEffect,useState} from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import me from '../../../assets/me.jpg';

import Bg1 from '../../../assets/Bg1.svg';
import Bg2 from '../../../assets/Bg2.svg';
import Bg3 from '../../../assets/Bg3.svg';

import './About.scss';
const AboutText="I'm Khanh Le, a competitive programmer as well as a web and mobile developer who enjoys solving both programming and real-world problems. "
+"I has been programming since 2014, which focused on competitive programming mostly. From 2018, I also have been working as a fullstack developer. "
+"I love to learn about algorithms and apply them to solve mathematical/programming problems. "
+"Besides, I love to develop software solution to solve real-life problem of myself or my communities. "
+"I was a co-founder and currently the president of Coding Hub, an organization that develops web and mobile applications to solve problems and improve learning/living experience of students on-campus"
+"at SUNY Plattsburgh. If there is any project that want to collaborate with me, feel free to reach out to me."
const ResumeText="This is my resume. I'm currently open to any intern/co-op opportunity for Fall/Winter 2020 and Spring/Summer 2021."
const listOfBg : string[] = [Bg1,Bg2,Bg3];
const ResumeLink= "https://drive.google.com/file/d/1UfWR_CYEm1_mpgLFog7e0iFigABfy1ir/view?usp=sharing";
const About : React.FC = ()=>{
    const [Bg,setBg]=useState(Bg1);
    useEffect(()=>{
        setBg(listOfBg[Math.floor(Math.random()*3)]);
    },[]);
    return (
        <div className='about' id='about' style={{
            backgroundImage:`url(${Bg})`,
            backgroundSize:"cover",
            padding:"10px"}}>
            <Container>
                <Row>
                    <Col className="about-col" md={6} xs={12}>
                        <img src={me} className="about-photo" alt="my face :P"/>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="about-content">
                            <p>Hi there,</p>
                            <p>{AboutText}</p>
                            <p>{ResumeText}</p>
                            <a href={ResumeLink} rel="noopener noreferrer" target="_blank"><Button><u>Resume</u></Button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;