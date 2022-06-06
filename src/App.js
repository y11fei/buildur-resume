import React from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
    return (
        <div className="App">
            <Personal />
            <Education />
            <Experience />
            <Skills />
        </div>
    );
}

export default App;
