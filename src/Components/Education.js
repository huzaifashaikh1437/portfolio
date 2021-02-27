import React from 'react'
import './education.css';
import Fade from 'react-reveal/Fade';
function Education() {
    return (
        <div className="education container-fluid" id="education">
            <h1 className="text-center mx-auto w-50">Education</h1>
            <div className="row d-flex justify-content-around align-items-center px-md-0 px-4">
                <Fade left>
                    <div className="school col-md-4 col-12">
                        <h2>Matriculation</h2>
                        <p>Faizul Islam Public School</p>
                        <p>Faculty: <strong>Computer Science</strong></p>
                        <p>2017-2019</p>
                    </div>
                </Fade>
                <Fade right>    
                    <div className="college col-md-4 col-12">
                        <h2>College</h2>
                        <p>Govt Formen College Karachi</p>
                        <p>Faculty: <strong>Computer Science</strong></p>
                        <p>2019-2021</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Education;
