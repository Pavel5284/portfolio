import React from "react";
import s from './Nav.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Nav() {
    return (
        <div className= {s.nav}>
            <a href="#">Главная</a>
            <a href="#">Скиллы</a>
            <a href="#">Проекты</a>
            <a href="#">Контакты</a>
        </div>
    )
}

export default Nav;