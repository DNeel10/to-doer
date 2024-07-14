import './style.css';
import { initializeApp } from './controller';
// import createTodo from './todo.js'
// import Project, { projects } from './project.js'
// import { displayProject, displayProjectList } from './display.js'
// import { createProjectButton, createTodoButton } from './buttons.js';


const projectContainerDiv = document.querySelector('#project-container');
const sidebarElement = document.querySelector('#sidebar');
const projectList = document.querySelector('#project-list');

initializeApp(projectContainerDiv, projectList, sidebarElement);

// const projectToday = new Project('Today','Today');
// const todo = createTodo('todo2','desc2','due2','prio2')

// projectToday.addTodo(todo);

// console.log(projectToday.todos);
// // project2.deleteTodo(todo2);
// console.log(projectToday.todos);

// projectContainerDiv.appendChild(displayProject(projectToday));
// displayProjectList(projects, projectList);
// createProjectButton(sidebarElement, projectList);
// projectContainerDiv.appendChild(createTodoButton(projectContainerDiv, projectToday));
