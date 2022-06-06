import React, { useState } from 'react';
import { Input, MiniInput, AddButton, DeleteButton } from '../styled/Styled';
import styles from '../css/personal.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const Personal = () => {
    const [linksList, setLinkslist] = useState([{ linkTitle: '', link: '' }]);
    const [clicks, setClicks] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const handleAddLink = (e) => {
        e.preventDefault();
        setLinkslist([...linksList, { linkTitle: '', link: '' }]);
        setClicks(clicks + 1);
        console.log(clicks);

        if (clicks >= 2) {
            setDisabled(true);
        }
    };

    const handleRemoveLink = (index) => {
        const list = [...linksList];
        list.splice(index, 1);
        setLinkslist(list);
    };
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Personal Information</h2>
            <Input type="text" placeholder="Name and Last Name" />
            <Input type="text" placeholder="Phone Number" />
            <Input type="text" placeholder="Email" />
            {linksList.map((link, index) => (
                <div key={index} className={styles.linkContainer}>
                    <MiniInput type="text" placeholder="Link Title" />
                    <MiniInput type="text" placeholder="Link" />
                    <IconButton aria-label="delete" onClick={handleRemoveLink}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
            <AddButton
                onClick={handleAddLink}
                disabled={disabled}
                className={styles.addLink}
            >
                Add Link
            </AddButton>
        </div>
    );
};

export default Personal;
