import React from 'react';
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
    educations,
    handleChangeEduc,
}) => {
    return (
        <div className={style.container}>
            <h2 className={style.h2}>Education</h2>
            {educations.map((education, index) => (
                <div key={index} className={style.uniContainer}>
                    <Input
                        type="text"
                        placeholder="University Name"
                        onChange={(e) =>
                            handleChangeEduc(e, index, 'university')
                        }
                    />
                    <div className={style.location}>
                        <Input
                            type="text"
                            placeholder="Location"
                            onChange={(e) =>
                                handleChangeEduc(e, index, 'location')
                            }
                        />
                    </div>
                    <div className={style.year}>
                        <MiniInput
                            type="text"
                            placeholder="Starting Year"
                            onChange={(e) => handleChangeEduc(e, index, 'from')}
                        />
                        <MiniInput
                            type="text"
                            placeholder="Ending Year or Present"
                            onChange={(e) => handleChangeEduc(e, index, 'to')}
                        />
                    </div>
                    <Input
                        type="text"
                        placeholder="Degree"
                        onChange={(e) => handleChangeEduc(e, index, 'degree')}
                    />
                    <WideDeleteButton
                        onClick={() => {
                            handleRemoveEduc(index);
                        }}
                    >
                        Delete Education
                    </WideDeleteButton>
                </div>
            ))}
            <WideAddButton className={style.add} onClick={handleAddEduc}>
                Add Education
            </WideAddButton>
        </div>
    );
};

export default Education;
