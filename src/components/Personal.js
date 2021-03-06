import React from 'react';
import { Input, AddButton } from '../styled/Styled';
import styles from '../css/personal.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const Personal = ({
    handleAddLink,
    handleRemoveLink,
    linksList,
    handleName,
    handleNumber,
    handleEmail,
    handleChangeLink,
}) => {
    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.h2}>Personal Information</h2>
                <Input
                    type="text"
                    placeholder="Jennie Kim"
                    onChange={handleName}
                />
                <Input
                    type="tel"
                    placeholder="(999)-999-9999"
                    pattern="[0-9][3]-[0-9][3]-[0-9][4]"
                    onChange={handleNumber}
                />
                <Input type="text" placeholder="Email" onChange={handleEmail} />
                {linksList?.map((link, index) => (
                    <div key={index} className={styles.linkContainer}>
                        <Input
                            type="text"
                            placeholder="Link"
                            onChange={(e) => handleChangeLink(e, index)}
                        />
                        <IconButton
                            aria-label="delete"
                            onClick={() => {
                                handleRemoveLink(index);
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
                <AddButton onClick={handleAddLink} className={styles.addLink}>
                    Add Link
                </AddButton>
            </div>
        </div>
    );
};

export default Personal;
