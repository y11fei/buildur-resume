import React, { useState } from 'react';
import {
    Input,
    MiniInput,
    WideAddButton,
    WideDeleteButton,
} from '../styled/Styled';
import style from '../css/education.module.scss';

const Education = ({
    handleAddEduc,
    handleRemoveEduc,
    disabled,
    educations,
}) => {
    return (
        <div className={style.container}>
            <h2 className={style.h2}>Education</h2>
            {educations.map((education, index) => (
                <div key={index} className={style.uniContainer}>
                    <Input type="text" placeholder="University Name" />
                    <div className={style.location}>
                        <Input type="text" placeholder="Location" />
                    </div>
                    <div className={style.year}>
                        <MiniInput type="text" placeholder="Starting Year" />
                        <MiniInput
                            type="text"
                            placeholder="Ending Year or Present"
                        />
                    </div>
                    <Input type="text" placeholder="Degree" />
                    <WideDeleteButton
                        onClick={() => {
                            handleRemoveEduc(index);
                        }}
                    >
                        Delete Education
                    </WideDeleteButton>
                </div>
            ))}
            <WideAddButton
                className={style.add}
                onClick={handleAddEduc}
                disabled={disabled}
            >
                Add Education
            </WideAddButton>
        </div>
    );
};

export default Education;
