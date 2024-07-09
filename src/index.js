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
project2.deleteTodo(todo2);
console.log(project2.todos);

window.project1 = project1;
window.todo1 = todo1
window.todo2 = todo2;
window.createTodo = createTodo;
window.Project = Project