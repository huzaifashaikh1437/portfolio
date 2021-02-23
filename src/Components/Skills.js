import React, { useEffect } from 'react'
import './skills.css'
import Fade from 'react-reveal/Fade';
function Skills() {

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills__items row d-flex h-100 justify-content-between px-md-2 px-4 mt-3">

                <Fade bottom>
                    <div className="skills__lang col-md-3 d-flex flex-column justify-content-center align-self-md-start mt-md-0 mt-5">
                        <h2>Languages</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JS (ES6)</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="skills__lang col-md-3 d-flex flex-column justify-content-center align-self-md-center mt-md-0 mt-5">
                        <h2>Libraries</h2>
                        <p>React (Redux,Hooks,Axios)</p>
                        <p>BootStrap</p>
                        <p>Material UI</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="skills__lang col-md-3 d-flex flex-column justify-content-center align-self-md-end mt-md-0 mt-5">
                        <h2>Other</h2>
                        <p>Firebase</p>
                        <p>Sass</p>
                        <p>Git</p>
                        <p>NPM</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills
