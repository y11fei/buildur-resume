import React from 'react';
import style from '../css/educationoutput.module.scss';

const EducationOutput = ({ educations }) => {
    return (
        <div className={style.education}>
            <div className="temp">
                <h4>Education</h4>
                <hr className="solidDash" />
            </div>
            {educations?.map((education, index) => {
                return (
                    <div className={style.temp} key={index}>
                        <div className={style.top}>
                            <div className={style.left}>
                                <p className={style.uni}>
                                    {education.university}
                                </p>
                                <p> – </p>
                                <div className={style.location}>
                                    <p>{education.location}</p>
                                </div>
                            </div>
                            <div className={style.date}>
                                <p>{education.from}</p>
                                <p> – </p>
                                <p>{education.to}</p>
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <div>{education.degree}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EducationOutput;
