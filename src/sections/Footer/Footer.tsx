import React from 'react';
import {Navbar, Nav, Col, Row} from 'react-bootstrap';
import './Footer.scss';
const Footer : React.FC = ()=>{
    return(
        <Navbar bg='light' sticky='bottom' className='footer'>
            <Navbar.Brand className="mr-auto">
                Khanh Le 
            </Navbar.Brand>
            <Nav>
                <Col>
                <Row>
                <p>Created with <a href="https://reactjs.org/">ReactJS</a></p>
                </Row>
                <Row>
                <p>With the help of <a href="https://react-bootstrap.github.io/">Bootstrap (React Boostrap)</a> </p>
                </Row>
                </Col>
            </Nav>
            <Nav className="ml-auto"/>
        </Navbar>
    )
}

export default Footer;