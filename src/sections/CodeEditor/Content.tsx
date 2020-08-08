const HomeCode=`
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
            backgroundImage:`+"`url(${Bg})`"+`,
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
`;
const AboutCode=`
const About : React.FC = ()=>{
    const [Bg,setBg]=useState(Bg1);
    useEffect(()=>{
        setBg(listOfBg[Math.floor(Math.random()*3)]);
    },[]);
    return (
        <div className='about' id='about' style={{
            backgroundImage:`+"`url(${Bg})`"+`,
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
};`;
const ExpCode=`
const Experience : React.FC = ()=>{
    const [Bg,setBg]=useState(Bg1);
    useEffect(()=>{
        setBg(listOfBg[Math.floor(Math.random()*3)]);
    },[]);
    return(
        <div className='experience' id='experience' style={{
            backgroundImage:`+"`url(${Bg})`"+`,
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
                                <img src={smallLogos[(anExp["key"]||"")]} alt={`+'`${anExp["key"]} small logo`'+`} height="24px"/>
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
`
export {HomeCode, AboutCode, ExpCode}