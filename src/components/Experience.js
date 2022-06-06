import React, { useState } from 'react';
import {
    Input,
    MiniInput,
    AddButton,
    WideAddButton,
    WideDeleteButton,
} from '../styled/Styled';
import style from '../css/experience.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const Experience = () => {
    const [experiences, setExperiences] = useState([
        { experience: '', location: '', from: '', to: '', descriptions: '' },
    ]);
    const [descriptions, setDescriptions] = useState([{ description: '' }]);

    const handleAddDesc = (e) => {
        e.preventDefault();
        setDescriptions([...descriptions, { description: '' }]);
    };

    const handleRemoveDesc = (index) => {
        const lists = [...descriptions];
        lists.splice(index, 1);
        setDescriptions(lists);
    };

    const handleAddExp = (e) => {
        e.preventDefault();
        setExperiences([
            ...experiences,
            {
                experience: '',
                location: '',
                from: '',
                to: '',
                descriptions: '',
            },
        ]);
    };

    const handleRemoveExp = (index) => {
        const lists = [...experiences];
        lists.splice(index, 1);
        setExperiences(lists);
    };
    return (
        <div className={style.main}>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className={style.container}>
                    <Input type="text" placeholder="Job Title" />
                    <Input type="text" placeholder="location" />
                    <div className={style.date}>
                        <MiniInput type="text" placeholder="From" />
                        <MiniInput type="text" placeholder="To" />
                    </div>
                    {descriptions.map((description, index) => (
                        <div key={index}>
                            <div className={style.description}>
                                <Input type="text" placeholder="Description" />
                                <IconButton
                                    aria-label="delete"
                                    onClick={handleRemoveDesc}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                    <AddButton
                        className={style.miniAdd}
                        onClick={handleAddDesc}
                    >
                        Add
                    </AddButton>
                    <WideDeleteButton onClick={handleRemoveExp}>
                        Delete Experience
                    </WideDeleteButton>
                </div>
            ))}
            <div className={style.mainButtons}>
                <WideAddButton onClick={handleAddExp}>
                    Add Experience
                </WideAddButton>
            </div>
        </div>
    );
};

export default Experience;
