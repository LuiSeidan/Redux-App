import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p className="center">lorem ipsum</p>
        </div>
    )
} 

export default Rainbow(About);