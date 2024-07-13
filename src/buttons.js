import Project, { projects } from './project.js';
import { displayProject, displayProjectList, displayTodo } from './display';
import { createNewProjectModal } from './modals.js';
import createTodo from './todo.js';

export function createProjectButton(element, list) {
  const projectButton = document.createElement('button');
  projectButton.textContent = 'Create Project'
  projectButton.classList.add('btn', 'btn-project');
  const projectDiv = document.querySelector('#project-container');
  
  element.appendChild(projectButton)

  projectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newProjectModal = element.appendChild(createNewProjectModal(list));
    newProjectModal.showModal();
  })
}

export function createTodoButton(el, project) {
  const todoButton = document.createElement('button');
  todoButton.classList.add('btn', 'btn-todo');
  todoButton.textContent = 'Create Todo';

  todoButton.addEventListener('click', (e) => {
    const newTodo = createTodo('testname', 'testdesc', 'testdue', 'testprio');
    project.addTodo(newTodo);
    el.appendChild(displayTodo(newTodo));
  })
  el.appendChild(todoButton);
}