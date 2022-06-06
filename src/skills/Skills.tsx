import React from "react";
import s from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur" +
                    " adipisicing elit.Asperiores debitis, ducimus eum ipsa laudantium nulla sint." +
                    " Aspernatur assumenda blanditiisdicta doloremque dolorum ducimus molestias odio, optio," +
                    " pariatur porro repellat repellendus."}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur" +
                    " adipisicing elit.Asperiores debitis, ducimus eum ipsa laudantium nulla sint." +
                    " Aspernatur assumenda blanditiisdicta doloremque dolorum ducimus molestias odio, optio," +
                    " pariatur porro repellat repellendus."}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur" +
                    " adipisicing elit.Asperiores debitis, ducimus eum ipsa laudantium nulla sint." +
                    " Aspernatur assumenda blanditiisdicta doloremque dolorum ducimus molestias odio, optio," +
                    " pariatur porro repellat repellendus."}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;