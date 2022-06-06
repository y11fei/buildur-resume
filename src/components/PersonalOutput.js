import React from 'react';
import style from '../css/personaloutput.module.scss';

const PersonalOutput = () => {
    return (
        <div className={style.personal}>
            <h1 className={style.h1}>Very Long Name</h1>
            <div className={style.contact}>
                <div>(818)-877-6399</div>
                <div>|</div>
                <div>yifeilu@usc.edu</div>
            </div>
            <div className={style.links}>
                <div>linkedin.com/yifei</div>
                <div>|</div>
                <div>github.com/y11fei</div>
            </div>
        </div>
    );
};

export default PersonalOutput;
