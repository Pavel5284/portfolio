import React from "react";
import s from './Contacts.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <form className={s.form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </form>
                <button className={s.btn}>Отправить</button>
            </div>
        </div>
    )
}

export default Contacts;