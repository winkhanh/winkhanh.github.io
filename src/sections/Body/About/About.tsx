import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import me from '../../../assets/me.jpg';
import './About.scss';
const AboutText="I'm Khanh Le, a competitive programmer as well as a web and mobile developer who enjoys solving both programming and real-world problems. "
+"I has been programming since 2014, which focused on competitive programming mostly. From 2018, I also have been working as a fullstack developer. "
+"I love to learn about algorithms and apply them to solve mathematical/programming problems. "
+"Besides, I love to develop software solution to solve real-life problem of myself or my communities. "
+"I was a co-founder and currently the president of Coding Hub, an organization that develops web and mobile applications to solve problems and improve learning/living experience of students on-campus"
+"at SUNY Plattsburgh. If there is any project that want to collaborate with me, feel free to reach out to me."
const ResumeText="This is my resume. I'm currently open to any intern/co-op opportunity for Fall/Winter 2020 and Spring/Summer 2021."
const About : React.FC = ()=>{
    return (
        <div className={'about'} id={'about'}>
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
                            <a href="https://drive.google.com/file/d/1BgqFQH-xIOnVdirdmabx-nzqgujkJEVQ/view?usp=sharing" target="_blank"><Button><u>Resume</u></Button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;