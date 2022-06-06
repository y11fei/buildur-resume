import React from 'react';
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

const Experience = ({
    handleAddDesc,
    handleRemoveDesc,
    handleAddExp,
    handleRemoveExp,
    experiences,
    descriptions,
}) => {
    return (
        <div className={style.main}>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className={style.container}>
                    <Input type="text" placeholder="Company" />
                    <Input type="text" placeholder="Location" />
                    <Input type="text" placeholder="Job Title" />
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
                                    onClick={() => {
                                        handleRemoveDesc(index);
                                    }}
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
                    <WideDeleteButton onClick={() => handleRemoveExp(index)}>
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
