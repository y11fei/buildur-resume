import React from 'react';
import style from '../css/skillsoutput.module.scss';

const SkillsOutput = () => {
    return (
        <div className={style.skills}>
            <div className="temp">
                <h4>Skills</h4>
                <hr className="solidDash" />
                <div className={style.bulletpoints}>
                    <ul>
                        <li>C++</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default SkillsOutput;
