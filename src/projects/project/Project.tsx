import React from "react";
import s from './Project.module.css';

function Project(props:any) {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <a className={s.btn}>Look</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}

export default Project;