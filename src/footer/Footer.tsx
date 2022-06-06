import React from "react";
import s from './Footer.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Павел Черняков</h2>
                <div className={s.socialItems}>
                    <div className={s.socialItem}></div>
                    <div className={s.socialItem}></div>
                    <div className={s.socialItem}></div>
                    <div className={s.socialItem}></div>
                </div>
                <span className={s.copy}>© 2022 Все права защищены</span>
            </div>
        </div>
    )
}

export default Footer;