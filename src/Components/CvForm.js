import React from 'react'
import '../App.css';
import Experience from './Experience';
import PersonInfo from './PersonInfo';
import Education from './Education';

const CvForm =  React.forwardRef((props, ref) => {
    
    return (
        <div ref={ref}>
            <PersonInfo alignment={props.alignment}></PersonInfo>
            <Education alignment={props.alignment}></Education>
            <Experience alignment={props.alignment}></Experience>
        </div>
    )
    })
    export default CvForm