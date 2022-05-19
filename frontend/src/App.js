import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';
import './App.css';
import background from './assets/background.jpg'

function App(){

  //useState returns a two positions array [the initial value of the variable, function to update the variable]
  const [projects, setProjects] = useState([]);

  // the first param is the function that will be triggered everytime a variable
  // in the dependencies array (second param) changes
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject(){
    
    /* This is a non api connected method
    setProjects([ ...projects, 
      {
        "title" : `One more added at ${Date.now()}`,
        "id" : `Id-${Date.now()}`,
        "owner" : "whopress"
      }
    ]);
    */

    const response = await api.post('/projects', {
      title: "New project added on api by POST",
      onwer: "whoclick"
    });

    const project = response.data;

    setProjects([...projects, project]);

    console.log(projects)
  }

  return (
    <>
      <img src={background} width={200}></img>
      <Header title="Homepage">
        <ul>
          <li>First line</li>
          <li>Second line</li>
        </ul>
      </Header>
      
      <Header title="Project"/>

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add project</button>

    </>
  );
}

export default App;