import React from "react";
import s from './Projects.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';
import Project from "./project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={"JS"} description={"description"}/>
                    <Project title={"CSS"} description={"description"}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;