import React from 'react';
import EDUCATION from '../data/education'

const Education = props => {
    const {school, degree, grad, course} = props.education
    return (
        <div style={{display: 'inline-block', width: 500, margin: 10}}>
            <h3>{school}</h3> 
            <p>{degree}</p>
            <p>{grad}</p>
            <h3>Relavinte Course work</h3>
            <p>{course}</p>

        </div>
    )
}

const Educations = () => (
    <div>
        <h1>Education</h1>
        <div>
            {
                EDUCATION.map(x => {
                    return(
                     <Education key={x.id} education={x}/>
                    )
                })
            }
        </div>
    </div>
)

export default Educations

