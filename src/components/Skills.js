import React, { useState } from 'react';
import { Input, AddButton } from '../styled/Styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import style from '../css/skills.module.scss';

const Skills = () => {
    const [skills, setSkills] = useState([{ skill: '' }]);
    const [click, setClicks] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const handleAddSkill = (e) => {
        e.preventDefault();
        setSkills([...skills, { skill: '' }]);
        setClicks(click + 1);

        if (click > 3) {
            setDisabled(true);
        }
    };

    const handleRemoveSkills = (index) => {
        const list = [...skills];
        list.splice(index, 1);
        setSkills(list);
    };
    return (
        <div className={style.main}>
            <h2 className={style.h2}>Skills</h2>
            {skills.map((skill, index) => (
                <div key={index} className={style.container}>
                    <Input type="text" placeholder="Excel" />
                    <IconButton
                        aria-label="delete"
                        onClick={handleRemoveSkills}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
            <AddButton
                onClick={handleAddSkill}
                disabled={disabled}
                className={style.add}
            >
                Add Skill
            </AddButton>
        </div>
    );
};

export default Skills;
