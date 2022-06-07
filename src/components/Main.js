import React, { useState, useRef } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import PersonalOutput from './PersonalOutput';
import EducationOutput from './EducationOutput';
import ExperienceOutput from './ExperienceOutput';
import SkillsOutput from './SkillsOutput';
import Header from './Header';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import { Button } from '@mui/material';
import '../css/main.scss';
import ReactToPrint from 'react-to-print';

const Main = () => {
    const [linksList, setLinkslist] = useState([{ link: '' }]);
    const [experiences, setExperiences] = useState([
        {
            company: '',
            location: '',
            title: '',
            from: '',
            to: '',
            descriptions1: '',
            description2: '',
            description3: '',
        },
    ]);
    const [educations, setEducations] = useState([
        { university: '', location: '', from: '', to: '', degree: '' },
    ]);

    const [skills, setSkills] = useState([{ skill: '' }]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const componentRef = useRef();

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleAddLink = (e) => {
        e.preventDefault();
        setLinkslist([...linksList, { link: '' }]);
    };

    const handleRemoveLink = (index) => {
        const list = [...linksList];
        list.splice(index, 1);
        setLinkslist(list);
    };

    const handleChangeLink = (e, index, link) => {
        const { value } = e.target;
        const list = [...linksList];
        list[index].link = value;
    };

    const handleChangeEduc = (e, index, name) => {
        const { value } = e.target;
        const list = [...educations];
        list[index][name] = value;
        console.log(educations);
    };

    const handleAddExp = (e, index) => {
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
    };

    const handleChangeExp = (e, index, name) => {
        const { value } = e.target;
        const list = [...experiences];
        list[index][name] = value;
        console.log(experiences);
    };

    const handleRemoveEduc = (index) => {
        const list = [...educations];
        list.splice(index, 1);
        setEducations(list);
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        setSkills([...skills, { skill: '' }]);
    };

    const handleRemoveSkills = (index) => {
        const list = [...skills];
        list.splice(index, 1);
        setSkills(list);
    };

    const handleChangeSkills = (e, index) => {
        const { value } = e.target;
        const list = [...skills];
        list[index].skill = value;
    };

    return (
        <div className="container">
            <Header />
            <div className="whole">
                <div className="editor">
                    <Personal
                        handleAddLink={handleAddLink}
                        handleRemoveLink={handleRemoveLink}
                        handleName={handleName}
                        handleNumber={handleNumber}
                        handleEmail={handleEmail}
                        handleChangeLink={handleChangeLink}
                        linksList={linksList}
                    />
                    <Education
                        handleAddEduc={handleAddEduc}
                        handleRemoveEduc={handleRemoveEduc}
                        educations={educations}
                        handleChangeEduc={handleChangeEduc}
                    />
                    <Experience
                        handleAddExp={handleAddExp}
                        handleRemoveExp={handleRemoveExp}
                        experiences={experiences}
                        handleChangeExp={handleChangeExp}
                    />
                    <Skills
                        skills={skills}
                        handleAddSkill={handleAddSkill}
                        handleRemoveSkills={handleRemoveSkills}
                        handleChangeSkills={handleChangeSkills}
                    />
                </div>
                <div className="right">
                    <div className="print">
                        <ReactToPrint
                            trigger={() => {
                                return (
                                    <Button
                                        variant="outlined"
                                        startIcon={<AdfScannerIcon />}
                                        size="large"
                                    >
                                        Print
                                    </Button>
                                );
                            }}
                            content={() => componentRef.current}
                            documentTitle="Resume"
                            pageStyle="print"
                        />
                    </div>
                    <div className="resume" ref={componentRef}>
                        <PersonalOutput
                            name={name}
                            number={number}
                            email={email}
                            linksList={linksList}
                        />
                        <EducationOutput educations={educations} />
                        <ExperienceOutput experiences={experiences} />
                        <SkillsOutput skills={skills} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
