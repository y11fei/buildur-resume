import React from 'react';
import style from '../css/experienceoutput.module.scss';

const ExperienceOutput = ({ experiences }) => {
    return (
        <div className={style.experience}>
            <div className="temp">
                <h4>Experience</h4>
                <hr className="solidDash" />
            </div>
            {experiences?.map((experience, index) => {
                return (
                    <div key={index} className={style.temp}>
                        <div className={style.top}>
                            <div className={style.left}>
                                <p className={style.company}>
                                    {experience.company}
                                </p>
                                <p> – </p>
                                <p className={style.location}>
                                    {experience.location}
                                </p>
                            </div>
                            <div className={style.date}>
                                <p>{experience.from}</p>
                                <p> – </p>
                                <p>{experience.to}</p>
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <p className={style.role}>{experience.title}</p>
                        </div>
                        <div className={style.descriptions}>
                            <ul>
                                <li>{experience.description1}</li>
                                <li>{experience.description2}</li>
                                <li>{experience.description3}</li>
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExperienceOutput;
