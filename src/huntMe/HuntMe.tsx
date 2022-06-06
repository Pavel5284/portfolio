import React from "react";
import s from './HuntMe.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';

function HuntMe() {
    return (
        <div className={s.huntMeBlock}>
            <div className={`${styleContainer.container} ${s.huntMeContainer}`}>
                <div className={s.huntMeWrapper}>
                    <h2 className={s.title}>Рассматриваю варианты удалённой работы</h2>
                    <button className={s.btn}>Нанять меня</button>
                </div>

            </div>
        </div>


    )
}

export default HuntMe;