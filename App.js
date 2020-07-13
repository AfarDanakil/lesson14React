import React from 'react';
import './App.css';

/**“BrowserRouter” is the parent component that holds all of
 your <Route> components. The <Route> components tell your
 app which other components to render (display) based on the
 route. And are classes of the “react-router-dom” module.
“as” keyword is used to assign an alias name for the
 component in this project we’ll call “BrowserRouter” as 
 “Router”. */
import { HashRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <HashRouter basename="/zkassa/WEB215/lesson14/">
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </div>
    </HashRouter>
    );
  }



  
  export default App;