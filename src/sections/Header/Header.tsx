import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import WButton from '../../components/WButton/WButton';
import Git from '../../assets/GitWin.svg';
import Facebook from '../../assets/FacebookWin.svg';
import Instagram from '../../assets/InstagramWin.svg';
import Mail from '../../assets/MailWin.svg';
import LinkedIn from '../../assets/LinkedInWin.svg';
import background from '../../assets/p1_bg.png';

const routes : [string,string][]=[
    ['[Home]','#home'],
    ['[About me]','#about'],
    ['[My Experience]','#experience'],
    ["[My life's event]",'#event']
];
const contacts: [string,string][]=[
    [Git,'https://github.com/winkhanh'],
    [Facebook,'https://www.facebook.com/wgiakhanh'],
    [Instagram,'https://www.instagram.com/khanh180900/'],
    [Mail,''],
    [LinkedIn,'https://www.linkedin.com/in/wkhanh-le/']
];
const ResumeLink= "https://drive.google.com/file/d/1UfWR_CYEm1_mpgLFog7e0iFigABfy1ir/view?usp=sharing";
const Header : React.FC = ()=>{
    return(
        <Navbar expand='lg' fixed='top' bg="light" >
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
                        <Nav.Link as={Button} href={ResumeLink} target="_blank"
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