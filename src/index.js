import './style.css';
import createTodo from './todo.js'
import Project from './project.js'

let i = 0
let j = 0
const todo1 = createTodo('test', 'testing', 'july 21', 'important');
const project1 = new Project('Project 1', 'September 30');

const projectContainerDiv = document.querySelector('#project-container');

function createProjectbutton() {
  const projectButton = document.createElement('button');
  const projectDiv = document.createElement('div');
  projectButton.innerText = 'Create Project';

  projectContainerDiv.appendChild(projectButton);
  
  projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const project = new Project(`project${j}`, `due date${j}`);
    projectContainerDiv.appendChild(projectDiv)
    console.log(project);
    j += 1
    createTodobutton(projectDiv, project);
  })
}

function createTodobutton(el, project) {
  const todoButton = document.createElement('button');
  todoButton.innerText = 'Create Todo';

  el.appendChild(todoButton);

  todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const todo = createTodo(`todo${i}`, `desc${i}`, `due${i}`, `prio${i}`);
    
    project.addTodo(todo);
    console.log(project.todos);
    i += 1
  })
}

createProjectbutton();


