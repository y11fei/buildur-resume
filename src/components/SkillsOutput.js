import React from 'react';
import style from '../css/skillsoutput.module.scss';

const SkillsOutput = ({ skills }) => {
    return (
        <div className={style.skills}>
            <div className="temp">
                <h4>Skills</h4>
                <hr className="solidDash" />
                <div className={style.bulletpoints}>
                    <ul>
                        {skills?.map((skill, index) => (
                            <li key={index}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default SkillsOutput;
