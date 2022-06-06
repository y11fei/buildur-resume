import React, { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import PersonalOutput from './PersonalOutput';
import EducationOutput from './EducationOutput';
import ExperienceOutput from './ExperienceOutput';
import SkillsOutput from './SkillsOutput';
import '../css/main.scss';

const Main = () => {
    const [linksList, setLinkslist] = useState([{ link: '' }]);
    const [clicks, setClicks] = useState(1);
    const [maxLinks, setMaxLinks] = useState(false);
    const [experiences, setExperiences] = useState([
        { experience: '', location: '', from: '', to: '', descriptions: '' },
    ]);
    const [descriptions, setDescriptions] = useState([{ description: '' }]);
    const [educations, setEducations] = useState([
        { university: '', city: '', state: '', from: '', to: '', degree: '' },
    ]);
    const [addClicks, setAddClicks] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [skills, setSkills] = useState([{ skill: '' }]);
    const [addSkill, setAddSkill] = useState(1);
    const [maxSkills, setMaxSkills] = useState(false);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
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
        setClicks(clicks + 1);
        console.log(clicks);

        if (clicks >= 2) {
            setMaxLinks(true);
        }
    };

    const handleRemoveLink = (index) => {
        const list = [...linksList];
        list.splice(index, 1);
        setLinkslist(list);
    };

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

    const handleAddSkill = (e) => {
        e.preventDefault();
        setSkills([...skills, { skill: '' }]);
        setAddSkill(maxSkills + 1);

        if (addSkill > 3) {
            setMaxSkills(true);
        }
    };

    const handleRemoveSkills = (index) => {
        const list = [...skills];
        list.splice(index, 1);
        setSkills(list);
    };

    return (
        <div className="whole">
            <div className="editor">
                <Personal
                    handleAddLink={handleAddLink}
                    handleRemoveLink={handleRemoveLink}
                    disabled={maxLinks}
                    linksList={linksList}
                    handleName={handleName}
                    handleNumber={handleNumber}
                    handleEmail={handleEmail}
                />
                <Education
                    handleAddEduc={handleAddEduc}
                    handleRemoveEduc={handleRemoveEduc}
                    disabled={disabled}
                    educations={educations}
                />
                <Experience
                    handleAddDesc={handleAddDesc}
                    handleRemoveDesc={handleRemoveDesc}
                    handleAddExp={handleAddExp}
                    handleRemoveExp={handleRemoveExp}
                    experiences={experiences}
                    descriptions={descriptions}
                />
                <Skills
                    skills={skills}
                    handleAddSkill={handleAddSkill}
                    handleRemoveSkills={handleRemoveSkills}
                    maxSkills={maxSkills}
                />
            </div>
            <div className="resume">
                <PersonalOutput />
                <EducationOutput />
                <ExperienceOutput />
                <SkillsOutput />
            </div>
        </div>
    );
};

export default Main;
