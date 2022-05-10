const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

// makes express understand JSON body request
app.use(express.json());

const projects = [];

// the get function receives two params: the path of the url and a funtion
// the function bellow have two params: req to keep request information and res to send the response
app.get('/hello', (req, res) => {
  return res.json({message: 'Weee Hello World', path: req.path, get: '/projects'});
});

app.get('/projects', (req, res) => {
  // here we got the destructured query params
  // to get route params, use .params, to body .body
  const { title } = req.query;

  const result = title
    ? projects.filter(project => project.title.includes(title)) 
    : projects;

  return res.json(result);
});

app.post('/projects', (req, res) => {

  const { title, owner } = req.body;

  const project = {id: uuid(), title, owner};

  projects.push(project);

  return res.json(project);
});

app.put('/projects/:id', (req, res) => {

  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0)
  {
    return res.status(400).json({error : 'Project not found.'});
  }

  const project = {id, title, owner};

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete('/projects/:id', (req, res) => {

  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0)
  {
    return res.status(400).json({error : 'Project not found.'});
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

// defines where the application will be runing, and the second param allows call a function when running
app.listen(3333, () => {
  console.log('Running app 📡')
});