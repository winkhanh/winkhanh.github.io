import React,{useContext} from 'react';
import './WButton.scss';
import ThemeContext from '../../context/theme';
const WButton : React.FC = ()=>{
    const {changeTheme}=useContext(ThemeContext);
    return(
        <span onClick={()=>{changeTheme();}} className='w-button-wrapper'>
                <div className='w-button'>
                    <div className="bar1"></div>
                    <div className="bar3"></div>
                    <div className="bar2"></div>
                    <div className="bar4"></div>
                </div>
        </span>
    )
}

export default WButton;