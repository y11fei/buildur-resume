import React from 'react';
import style from '../css/personaloutput.module.scss';

const PersonalOutput = ({ name, number, email, linksList }) => {
    return (
        <div className={style.personal}>
            <h1 className={style.h1}>{name}</h1>
            <div className={style.contact}>
                <div>{number}</div>
                <div>|</div>
                <div>{email}</div>
            </div>
            <div className={style.links}>
                {linksList.map((links, index) => {
                    return <div key={index}>{links.link}</div>;
                })}
            </div>
        </div>
    );
};

export default PersonalOutput;
