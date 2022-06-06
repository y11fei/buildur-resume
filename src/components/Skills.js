import React, { useState } from 'react';
import { Input, AddButton } from '../styled/Styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import style from '../css/skills.module.scss';

const Skills = ({ skills, handleAddSkill, handleRemoveSkills, maxSkills }) => {
    return (
        <div className={style.main}>
            <h2 className={style.h2}>Skills</h2>
            {skills.map((skill, index) => (
                <div key={index} className={style.container}>
                    <Input type="text" placeholder="Excel" />
                    <IconButton
                        aria-label="delete"
                        onClick={() => {
                            handleRemoveSkills(index);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
            <AddButton
                onClick={handleAddSkill}
                disabled={maxSkills}
                className={style.add}
            >
                Add Skill
            </AddButton>
        </div>
    );
};

export default Skills;
