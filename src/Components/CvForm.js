import React from 'react'
import '../App.css';
import Experience from './Experience';
import PersonInfo from './PersonInfo';
import Education from './Education';

const CvForm =  React.forwardRef((props, ref) => {

    return (
        
        <div ref={ref}>
            <PersonInfo></PersonInfo>
            <Education></Education>
            <Experience></Experience>
        </div>
    )
    })
    export default CvForm