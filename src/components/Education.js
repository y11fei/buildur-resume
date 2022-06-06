import React, { useState } from 'react';
import {
    Input,
    MiniInput,
    WideAddButton,
    WideDeleteButton,
} from '../styled/Styled';
import style from '../css/education.module.scss';

const Education = () => {
    const [educations, setEducations] = useState([
        { university: '', city: '', state: '', from: '', to: '', degree: '' },
    ]);
    const [addClicks, setAddClicks] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const handleAddEduc = (e) => {
        e.preventDefault();
        setEducations([
            ...educations,
            {
                university: '',
                city: '',
                state: '',
                from: '',
                to: '',
                degree: '',
            },
        ]);
        setAddClicks(addClicks + 1);

        if (addClicks >= 2) {
            setDisabled(true);
        }
    };

    const handleRemoveEduc = (index) => {
        const list = [...educations];
        list.splice(index, 1);
        setEducations(list);
    };
    return (
        <div className={style.container}>
            <h2 className={style.h2}>Education</h2>
            {educations.map((education, index) => (
                <div key={index} className={style.uniContainer}>
                    <Input type="text" placeholder="University Name" />
                    <div className={style.location}>
                        <MiniInput type="text" placeholder="Location City" />
                        <MiniInput type="text" placeholder="Location State" />
                    </div>
                    <div className={style.year}>
                        <MiniInput type="text" placeholder="Starting Year" />
                        <MiniInput
                            type="text"
                            placeholder="Ending Year or Present"
                        />
                    </div>
                    <Input type="text" placeholder="Degree" />
                    <WideDeleteButton onClick={handleRemoveEduc}>
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
