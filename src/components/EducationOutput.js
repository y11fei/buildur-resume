import React from 'react';
import style from '../css/educationoutput.module.scss';

const EducationOutput = () => {
    return (
        <div className={style.education}>
            <div className="temp">
                <h4>Education</h4>
                <hr className="solidDash" />
                <div className={style.top}>
                    <div className={style.left}>
                        <p className={style.uni}>
                            University of Southern California
                        </p>
                        <p> – </p>
                        <div className={style.location}>
                            <p>Los Angeles, CA</p>
                        </div>
                    </div>
                    <div className={style.date}>
                        <p>2021</p>
                        <p> – </p>
                        <p>Present</p>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div>Bachelors of Science in Computer Science</div>
                </div>
            </div>
        </div>
    );
};

export default EducationOutput;
