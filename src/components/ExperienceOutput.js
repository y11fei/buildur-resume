import React from 'react';
import style from '../css/experienceoutput.module.scss';

const ExperienceOutput = () => {
    return (
        <div className={style.experience}>
            <div className="temp">
                <h4>Experience</h4>
                <hr className="solidDash" />
                <div className={style.top}>
                    <div className={style.left}>
                        <p className={style.company}>Google</p>
                        <p> – </p>
                        <p className={style.location}>Los Angeles, CA</p>
                    </div>
                    <div className={style.date}>
                        <p>2021</p>
                        <p> – </p>
                        <p>Present</p>
                    </div>
                </div>
                <div className={style.bottom}>
                    <p className={style.role}>Software Engineer</p>
                </div>
                <div className={style.descriptions}>
                    <ul>
                        <li>A lot of words a lot of words</li>
                        <li>A lot of words a lot of words</li>
                        <li>A lot of words a lot of words</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperienceOutput;
