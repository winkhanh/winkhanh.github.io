import React from 'react';

const ThemeContext= React.createContext({
    theme:0,
    setTheme:(aNum:number)=>{},
    changeTheme:()=>{}
});

export default ThemeContext;