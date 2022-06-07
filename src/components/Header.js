import React from 'react';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import style from '../css/header.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <h2 className={style.h2}>Quick Resume Builder App!</h2>
            <AdfScannerIcon className={style.icon}></AdfScannerIcon>
        </div>
    );
};

export default Header;
