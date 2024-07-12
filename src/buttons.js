import Project, { projects } from './project.js';
import { displayProject, displayProjectList, displayTodo } from './display';
import createTodo from './todo.js';

export function createProjectButton(sidebar, list) {
  const projectButton = document.createElement('button');
  projectButton.textContent = 'Create Project'
  projectButton.classList.add('btn-project');
  
  sidebar.appendChild(projectButton)

  projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newProject = new Project('name', 'date');

    const newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add('project');

    newProjectDiv.appendChild(displayProject(newProject));

    displayProjectList(projects, list)
  })
}

export function createTodoButton(el, project) {
  const todoButton = document.createElement('button');
  todoButton.textContent = 'Create Todo';

  todoButton.addEventListener('click', (e) => {
    const newTodo = createTodo('testname', 'testdesc', 'testdue', 'testprio');
    project.addTodo(newTodo);
    el.appendChild(displayTodo(newTodo));
  })
  el.appendChild(todoButton);
}