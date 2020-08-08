import React,{useState} from 'react';
import ThemeContext from './context/theme';
import './App.scss';
import Header from './sections/Header/Header';
import Body from './sections/Body/Body';
import Footer from './sections/Footer/Footer';
import CodeEditor from './sections/CodeEditor/CodeEditor';
function App() {
  const [theme,setTheme]=useState(Math.round(Math.random()*360))
  return (
    <ThemeContext.Provider value={{
      theme:theme,
      setTheme:(aNumber:number)=>{setTheme(aNumber);},
      changeTheme:()=>{setTheme(Math.round(Math.random()*360))}
    }}>
    <div className="app">
      <Header/>
      <Body/>
      <Footer/>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
