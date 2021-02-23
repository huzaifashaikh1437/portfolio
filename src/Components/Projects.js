import React from 'react';
import './projects.css';
import Fade from 'react-reveal/Fade';
import { Button } from '@material-ui/core';
import projects from './projectsData';
function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projects__container row d-flex flex-row justify-content-around align-items-center">
            {
                projects.map((project)=>(
                    <Fade bottom>
                    <div className="project__image col-md-3 col-12 px-md-0 px-5 my-md-0 my-5">
                        <div className="project__image__layer d-flex flex-column justify-content-center align-items-center">
                            <h3 className="text-white">{project.title}</h3>
                            <Button className="project__btn"><a href={project.link} target="__blank">View Project</a></Button>
                        </div>
                        <img src={project.img} alt="project" />
                    </div>
                    </Fade>
                    
                ))
            }
            </div>
        </div>
    )
}

export default Projects;
