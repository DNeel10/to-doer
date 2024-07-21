import Project from './project.js';
import createTodo from './todo.js';
import { format } from "date-fns";

export function createNewProjectModal(onSubmit) {
  const modal = document.createElement('dialog');
  modal.classList.add('modal', 'modal-project');

  const closeModal = document.createElement('button');
  closeModal.textContent = 'X';
  closeModal.classList.add('btn-cancel');

  closeModal.addEventListener('click', () => {
    modal.close();
  })

  const projectForm = document.createElement('form');

  const projectNameDiv = document.createElement('div');
  const projectNameLabel = document.createElement('label');
  projectNameLabel.textContent = 'Project name';
  projectNameLabel.htmlFor = 'projectname'
  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.id = 'projectname';
  projectNameInput.name = 'projectname';
  projectNameDiv.appendChild(projectNameLabel);
  projectNameDiv.appendChild(projectNameInput);

  const projectDueDateDiv = document.createElement('div');
  const projectDueDateLabel = document.createElement('label'); 
  projectDueDateLabel.textContent = 'Due Date';
  projectDueDateLabel.htmlFor = 'dueDate';
  const projectDueDateInput = document.createElement('input');
  projectDueDateInput.type = 'date';
  projectDueDateInput.name = 'dueDate';
  projectDueDateInput.id = 'dueDate';
  projectDueDateDiv.appendChild(projectDueDateLabel);
  projectDueDateDiv.appendChild(projectDueDateInput);

  const projectSubmitButton = document.createElement('button');
  projectSubmitButton.textContent = 'Create Project';

  projectForm.appendChild(projectNameDiv);
  projectNameDiv.classList.add('form-group');
  projectForm.appendChild(projectDueDateDiv);
  projectDueDateDiv.classList.add('form-group');
  projectForm.appendChild(projectSubmitButton);


  modal.appendChild(projectForm);
  modal.appendChild(closeModal);

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newProject = new Project(projectNameInput.value, format(projectDueDateInput.value, "MM/dd/yyyy"));
    onSubmit(newProject);
    modal.close();
  })

  return modal;
}

export function createNewTodoModal(onSubmit) {
  const modal = document.createElement('dialog');
  modal.classList.add('modal','modal-todo');

  const closeModal = document.createElement('button');
  closeModal.textContent = 'X';
  closeModal.classList.add('btn-cancel');

  closeModal.addEventListener('click', () => {
    modal.close();
    modal.remove();
  })

  modal.addEventListener('cancel', () => {
    modal.close();
    modal.innerHTML = ''
  })
  const todoForm = document.createElement('form');

  const todoNameDiv = document.createElement('div');
  const todoNameLabel = document.createElement('label');
  todoNameLabel.textContent = 'To-Do Name';
  todoNameLabel.htmlFor = 'todoName';
  const todoNameInput = document.createElement('input');
  todoNameInput.type = 'text';
  todoNameInput.name = 'todoName';
  todoNameInput.id = 'todoName';
  todoNameDiv.appendChild(todoNameLabel);
  todoNameDiv.appendChild(todoNameInput);

  const todoDescDiv = document.createElement('div');
  const todoDescLabel = document.createElement('label'); 
  todoDescLabel.textContent = 'Description';
  todoDescLabel.htmlFor = 'desc';
  const todoDescInput = document.createElement('textarea');
  todoDescInput.name = 'desc';
  todoDescInput.id = 'desc';
  todoDescDiv.appendChild(todoDescLabel);
  todoDescDiv.appendChild(todoDescInput);
  todoDescInput.classList.add('input-desc');

  const todoDueDateDiv = document.createElement('div');
  const todoDueDateLabel = document.createElement('label'); 
  todoDueDateLabel.textContent = 'Due Date';
  todoDueDateLabel.htmlFor = 'dueDate';
  const todoDueDateInput = document.createElement('input');
  todoDueDateInput.type = 'date';
  todoDueDateInput.name = 'dueDate';
  todoDueDateInput.id = 'dueDate'
  todoDueDateDiv.appendChild(todoDueDateLabel);
  todoDueDateDiv.appendChild(todoDueDateInput);

  const todoPriorityDiv = document.createElement('div');
  const todoPriorityLabel = document.createElement('label'); 
  todoPriorityLabel.textContent = 'Priority';
  todoPriorityLabel.htmlFor = 'priority';
  const todoPriorityInput = document.createElement('select');
  todoPriorityInput.name = 'priority';
  todoPriorityInput.id = 'priority';

  const priorityOptionHigh = document.createElement('option');
  priorityOptionHigh.textContent = "High";
  priorityOptionHigh.value = "High";


  const priorityOptionMedium = document.createElement('option');
  priorityOptionMedium.textContent = "Medium";
  priorityOptionMedium.value = "Medium";


  const priorityOptionLow = document.createElement('option');
  priorityOptionLow.textContent = "Low";
  priorityOptionLow.value = "Low";

  todoPriorityInput.append(priorityOptionHigh, priorityOptionMedium, priorityOptionLow);


  todoPriorityDiv.appendChild(todoPriorityLabel);
  todoPriorityDiv.appendChild(todoPriorityInput);

  const todoSubmitButton = document.createElement('button');
  todoSubmitButton.textContent = 'Create To-Do';

  todoForm.appendChild(todoNameDiv);
  todoNameDiv.classList.add('form-group');
  todoForm.appendChild(todoDescDiv);
  todoDescDiv.classList.add('form-group');
  todoForm.appendChild(todoDueDateDiv);
  todoDueDateDiv.classList.add('form-group')
  todoForm.appendChild(todoPriorityDiv);
  todoPriorityDiv.classList.add('form-group')
  todoForm.appendChild(todoSubmitButton);

  modal.appendChild(todoForm);
  modal.appendChild(closeModal);

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newTodo = createTodo(
      todoNameInput.value, 
      todoDescInput.value, 
      format(todoDueDateInput.value, "MM/dd/yyyy"), 
      todoPriorityInput.value
    );
    console.log(newTodo);
    onSubmit(newTodo);
    modal.close();
    modal.remove();
  })

  return modal;
}