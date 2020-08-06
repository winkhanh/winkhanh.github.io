import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import WButton from '../../components/WButton/WButton';
import Git from '../../assets/GitWin.svg';
import Facebook from '../../assets/FacebookWin.svg';
import Instagram from '../../assets/InstagramWin.svg';
import Discord from '../../assets/DiscordWin.svg';
import background from '../../assets/p1_bg.png';
const routes : [string,string][]=[
    ['[Home]','/'],
    ['[About]','/about'],
    ['[Contact me]','/contact']
];
const contacts: [string,string][]=[
    [Git,'https://github.com/winkhanh'],
    [Facebook,'https://www.facebook.com/wgiakhanh'],
    [Instagram,'https://www.instagram.com/khanh180900/'],
    [Discord,'']
];

const Header : React.FC = ()=>{
    return(
        <Navbar expand='lg' fixed='top' bg="light" sticky='top'>
            <Navbar.Brand>
                <WButton/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                {routes.map((obj,idx)=>
                    <Nav.Item key={idx}>
                        <Nav.Link href={obj[1]}>{obj[0]}</Nav.Link>
                    </Nav.Item>    
                )}
                </Nav>
                
                <Nav className="ml-auto">
                {contacts.map((obj,idx)=>
                    <Nav.Item key={idx}>
                        <Nav.Link href={obj[1]} target="_blank">
                            <img src={obj[0]} alt={obj[1]} style={{"height":"4vh"}}/>
                        </Nav.Link>
                    </Nav.Item>
                )}
                    <Nav.Item>
                        <Nav.Link as={Button} href="https://drive.google.com/file/d/1BgqFQH-xIOnVdirdmabx-nzqgujkJEVQ/view?usp=sharing" target="_blank"
                        style={{
                            background:`url(${background}) no-repeat`,
                            "background-size":'contain',
                            "background-position":"center"

                        }}>
                            <b>{"Resume"}</b></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default Header;