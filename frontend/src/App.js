import React, { useState } from 'react';

import Header from './components/Header';
import './App.css';
import background from './assets/background.jpg'

function App(){

  //useState returns a two positions array [the initial value of the variable, function to update the variable]
  const [projects, setProjects] = useState(['New book', 'New draw']);

  function handleAddProject(){
    
    setProjects([ ...projects, `One more added at ${Date.now()}`]);

    console.log(projects)
  }

  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>First line</li>
          <li>Second line</li>
        </ul>
      </Header>
      <img src={background} width={300}></img>
      <Header title="Project"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>

    </>
  );
}

export default App;