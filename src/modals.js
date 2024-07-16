import Project from './project.js';
import createTodo from './todo.js';

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

  const projectTitleDiv = document.createElement('div');
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.textContent = 'Project Title';
  const projectTitleInput = document.createElement('input');
  projectTitleInput.type = 'text';
  projectTitleInput.name = 'projectTitle';
  projectTitleDiv.appendChild(projectTitleLabel);
  projectTitleDiv.appendChild(projectTitleInput);

  const projectDueDateDiv = document.createElement('div');
  const projectDueDateLabel = document.createElement('label'); 
  projectDueDateLabel.textContent = 'Due Date';
  const projectDueDateInput = document.createElement('input');
  projectDueDateInput.type = 'date';
  projectDueDateInput.name = 'dueDate';
  projectDueDateDiv.appendChild(projectDueDateLabel);
  projectDueDateDiv.appendChild(projectDueDateInput);

  const projectSubmitButton = document.createElement('button');
  projectSubmitButton.textContent = 'Create Project';

  projectForm.appendChild(projectTitleDiv);
  projectForm.appendChild(projectDueDateDiv);
  projectForm.appendChild(projectSubmitButton);


  modal.appendChild(projectForm);
  modal.appendChild(closeModal);

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newProject = new Project(projectTitleInput.value, projectDueDateInput.value);
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

  const todoForm = document.createElement('form');

  const todoNameDiv = document.createElement('div');
  const todoNameLabel = document.createElement('label');
  todoNameLabel.textContent = 'To-Do Name';
  const todoNameInput = document.createElement('input');
  todoNameInput.type = 'text';
  todoNameInput.name = 'todoName';
  todoNameDiv.appendChild(todoNameLabel);
  todoNameDiv.appendChild(todoNameInput);

  const todoDescDiv = document.createElement('div');
  const todoDescLabel = document.createElement('label'); 
  todoDescLabel.textContent = 'Description';
  const todoDescInput = document.createElement('textarea');
  todoDescInput.name = 'desc';
  todoDescDiv.appendChild(todoDescLabel);
  todoDescDiv.appendChild(todoDescInput);
  todoDescInput.classList.add('input-desc');

  const todoDueDateDiv = document.createElement('div');
  const todoDueDateLabel = document.createElement('label'); 
  todoDueDateLabel.textContent = 'Due Date';
  const todoDueDateInput = document.createElement('input');
  todoDueDateInput.type = 'date';
  todoDueDateInput.name = 'dueDate';
  todoDueDateDiv.appendChild(todoDueDateLabel);
  todoDueDateDiv.appendChild(todoDueDateInput);

  const todoPriorityDiv = document.createElement('div');
  const todoPriorityLabel = document.createElement('label'); 
  todoPriorityLabel.textContent = 'Priority';
  const todoPriorityInput = document.createElement('input');
  todoPriorityInput.type = 'Select';
  todoPriorityInput.name = 'priority';
  todoPriorityDiv.appendChild(todoPriorityLabel);
  todoPriorityDiv.appendChild(todoPriorityInput);

  const todoSubmitButton = document.createElement('button');
  todoSubmitButton.textContent = 'Create To-Do';

  todoForm.appendChild(todoNameDiv);
  todoForm.appendChild(todoDescDiv);
  todoForm.appendChild(todoDueDateDiv);
  todoForm.appendChild(todoPriorityDiv);
  todoForm.appendChild(todoSubmitButton);

  modal.appendChild(todoForm);
  modal.appendChild(closeModal);

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newTodo = createTodo(
      todoNameInput.value, 
      todoDescInput.value, 
      todoDueDateInput.value, 
      todoPriorityInput.value
    );
    onSubmit(newTodo);
    modal.close();
    modal.remove();
  })

  return modal;
}