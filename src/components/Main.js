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

        if (clicks >= 3) {
            setMaxLinks(true);
        }
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
        setAddClicks(addClicks + 1);

        if (addClicks >= 2) {
            setDisabled(true);
        }
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

    const handleChangeSkills = (e, index) => {
        const { value } = e.target;
        const list = [...skills];
        list[index].skill = value;
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
                    handleChangeLink={handleChangeLink}
                />
                <Education
                    handleAddEduc={handleAddEduc}
                    handleRemoveEduc={handleRemoveEduc}
                    disabled={disabled}
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
                    maxSkills={maxSkills}
                    handleChangeSkills={handleChangeSkills}
                />
            </div>
            <div className="resume">
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
    );
};

export default Main;
