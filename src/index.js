import './style.css';
import createTodo from './todo.js'
import Project, { projects } from './project.js'
import { displayProject, displayProjectList } from './display.js'
import { createProjectButton } from './buttons.js';
import { createNewProjectModal } from './modals.js';

let i = 0
let j = 0
const todo1 = createTodo('test', 'testing', 'july 21', 'important');

const projectContainerDiv = document.querySelector('#project-container');
const sidebarElement = document.querySelector('#sidebar');
const projectList = document.querySelector('#project-list');


const projectToday = new Project('Today','Today');
const todo2 = createTodo('todo2','desc2','due2','prio2')
const todo3 = createTodo('todo3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'due3', 'prio3')
projectToday.addTodo(todo1);
projectToday.addTodo(todo2);
projectToday.addTodo(todo3);
console.log(projectToday.todos);
// project2.deleteTodo(todo2);
console.log(projectToday.todos);

projectContainerDiv.appendChild(displayProject(projectToday));
displayProjectList(projects, projectList);
createProjectButton(sidebarElement, projectList);
