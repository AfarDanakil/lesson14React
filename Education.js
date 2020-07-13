import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Wake Tech. Community College" where="North Carolina" from="spring 2018" to="Present"/>
            <Widecard title="Literature - (BAs)" where="Addis Ababa University" from="1999" to="2003"/>
            </div>
            )
        }
    }
    
export default Education
    