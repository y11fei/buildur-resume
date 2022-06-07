import React from 'react';
import {
    Input,
    MiniInput,
    WideAddButton,
    WideDeleteButton,
} from '../styled/Styled';
import style from '../css/experience.module.scss';

const Experience = ({
    handleAddExp,
    handleRemoveExp,
    experiences,
    handleChangeExp,
}) => {
    return (
        <div className={style.main}>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className={style.container}>
                    <Input
                        type="text"
                        placeholder="Company"
                        onChange={(e) => handleChangeExp(e, index, 'company')}
                    />
                    <Input
                        type="text"
                        placeholder="Location"
                        onChange={(e) => handleChangeExp(e, index, 'location')}
                    />
                    <Input
                        type="text"
                        placeholder="Job Title"
                        onChange={(e) => handleChangeExp(e, index, 'title')}
                    />
                    <div className={style.date}>
                        <MiniInput
                            type="text"
                            placeholder="From"
                            onChange={(e) => handleChangeExp(e, index, 'from')}
                        />
                        <MiniInput
                            type="text"
                            placeholder="To"
                            onChange={(e) => handleChangeExp(e, index, 'to')}
                        />
                    </div>
                    <div className={style.description}>
                        <Input
                            type="text"
                            placeholder="Description"
                            onChange={(e) =>
                                handleChangeExp(e, index, 'description1')
                            }
                        />
                        <Input
                            type="text"
                            placeholder="Description"
                            onChange={(e) =>
                                handleChangeExp(e, index, 'description2')
                            }
                        />
                        <Input
                            type="text"
                            placeholder="Description"
                            onChange={(e) =>
                                handleChangeExp(e, index, 'description3')
                            }
                        />
                    </div>
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
