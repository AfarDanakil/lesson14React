import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/zz.png';
import Social from '../components/Social';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
               
            <img src={profilepic} className="profilepic"></img>

            <ReactTypingEffect className="typingeffect" 
                                text={['I am Zenash','I am Front-End Web Developer']} 
                                speed={100} eraseDelay={800}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    