import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML5','CSS3','Javascript','PHP','Bootstrap','React','Git']

        };
    }
/*instead of using a “for loop” to loop
            through every item in the array, we use the map() method.*/
    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
           
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    