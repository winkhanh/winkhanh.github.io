import React,{useState} from 'react';
import {Switch, HashRouter as Router, Route} from 'react-router-dom';

import ThemeContext from './context/theme';
import './App.scss';
import Header from './sections/Header/Header';
import Body from './sections/Body/Body';
import Visualizer from './sections/AlgorithmsVisualizer/Visualizer';
import Footer from './sections/Footer/Footer';

function App() {
  const [theme,setTheme]=useState(Math.round(Math.random()*360))
  return (
    <ThemeContext.Provider value={{
      theme:theme,
      setTheme:(aNumber:number)=>{setTheme(aNumber);},
      changeTheme:()=>{setTheme(Math.round(Math.random()*360))}
    }}>
    <div className="app">
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/av'>
          <Visualizer/>
        </Route>
        <Route path='/'>
          <Body/>
        </Route>
        
      </Switch>
      <Footer/>
    </Router>
    </div>
    </ThemeContext.Provider>
  );
}
export default App;
