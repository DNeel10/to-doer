import './style.css';
import createTodo from './todo.js'
import Project from './project.js'
import { displayTodo, displayProject } from './display.js'

let i = 0
let j = 0
const todo1 = createTodo('test', 'testing', 'july 21', 'important');
const project1 = new Project('Project 1', 'September 30');

const projectContainerDiv = document.querySelector('#project-container');

function createProjectbutton() {
  const projectButton = document.createElement('button');
  projectButton.textContent = 'Create Project'
  
  projectContainerDiv.appendChild(projectButton)

  

  projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newProject = new Project('name', 'date');

    const newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add('project');

    newProjectDiv.appendChild(displayProject(newProject));

    createTodobutton(newProjectDiv, newProject);

    projectContainerDiv.appendChild(newProjectDiv);
  })
}

function createTodobutton(el, project) {
  const todoButton = document.createElement('button');
  todoButton.textContent = 'Create Todo';

  todoButton.addEventListener('click', (e) => {
    const newTodo = createTodo('testname', 'testdesc', 'testdue', 'testprio');
    project.addTodo(newTodo);
    el.appendChild(displayTodo(newTodo));
  })
  el.appendChild(todoButton);
}

createProjectbutton();

const project2 = new Project('Proj2','Anytime');
const todo2 = createTodo('todo2','desc2','due2','prio2')
const todo3 = createTodo('todo3', 'desc3', 'due3', 'prio3')
console.log(todo2.status);
todo2.changeStatus('Complete');
console.log(todo2.status)
project2.addTodo(todo1);
project2.addTodo(todo2);
project2.addTodo(todo3);
console.log(project2.todos);
// project2.deleteTodo(todo2);
console.log(project2.todos);

projectContainerDiv.appendChild(displayProject(project2));