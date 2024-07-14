
// import { displayProject, displayProjectList, displayTodo } from './display';
// import { createNewProjectModal, createNewTodoModal } from './modals.js';

export function createButton(text, onClick) {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = text;
  buttonElement.addEventListener('click', onClick);

  return buttonElement;
}

// export function createProjectButton(element, list) {
//   const projectButton = document.createElement('button');
//   projectButton.textContent = 'Create Project'
//   projectButton.classList.add('btn', 'btn-project');
//   const projectDiv = document.querySelector('#project-container');
  
//   element.appendChild(projectButton)

//   projectButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const newProjectModal = element.appendChild(createNewProjectModal(list));
//     newProjectModal.showModal();
//   })
// }

// export function createTodoButton(el, project) {
//   const todoButton = document.createElement('button');
//   todoButton.classList.add('btn', 'btn-todo');
//   todoButton.textContent = 'Create Todo';

//   todoButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const newTodoModal = el.appendChild(createNewTodoModal(project))
//     // const newTodo = createTodo('testname', 'testdesc', 'testdue', 'testprio');
//     // project.addTodo(newTodo);
//     // el.appendChild(displayTodo(newTodo));
//     el.appendChild(newTodoModal);
//   })
//   return todoButton
// }