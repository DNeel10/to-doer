import { createButton } from './buttons.js';

export function displayTodoCard(todo, project) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const todoInfo = document.createElement('div');
  todoInfo.classList.add('todo__info');

  const todoButtons = document.createElement('div');

  const todoNameDiv = document.createElement('div');
  const todoName = document.createElement('h2');
  todoName.textContent = `${todo.name}`
  todoName.classList.add('todo__name');
  todoNameDiv.appendChild(todoName);

  const todoDesc = document.createElement('p');
  todoDesc.textContent = `${todo.description}`;
  todoDesc.classList.add('todo__desc', 'hidden');

  const todoDue = document.createElement('p');
  todoDue.textContent = `${todo.dueDate}`;
  todoDue.classList.add('todo__due');

  // const todoStatus = document.createElement('p');
  // todoStatus.textContent = `${todo.status}`;
  // todoStatus.classList.add('todo__status');

  const deleteButton = createButton('X', () => {
    project.deleteTodo(todo);
    todoDiv.remove();
  })
  deleteButton.classList.add('btn', 'btn-delete')

  const editButton = createButton('📝', () => {
    todoDiv.innerHTML = ''
    const todoEditForm = createTodoEditForm(todo, todoDiv, project);

    todoDiv.appendChild(todoEditForm);
  })

  // append all elements to the todoDiv
  todoButtons.appendChild(deleteButton)
  todoButtons.appendChild(editButton)

  todoInfo.appendChild(todoNameDiv);
  todoInfo.appendChild(todoDue);
  todoInfo.appendChild(todoButtons);

  todoDiv.appendChild(todoInfo);
  todoDiv.appendChild(todoDesc);

  todoDiv.addEventListener('click', () => {
    todoDiv.classList.toggle('todo-expanded');
    todoDesc.classList.toggle('hidden');
    
  })
  return todoDiv;
}

export function displayProject(project) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project')

  const projectInfoElement = document.createElement('div');
  projectInfoElement.classList.add('project-info');

  const projectName = document.createElement('h1');
  projectName.textContent = `${project.title}`;
  projectInfoElement.appendChild(projectName);

  const projectDueDateElement = document.createElement('p');
  projectDueDateElement.textContent = `Due: ${project.dueDate}`;
  projectDueDateElement.classList.add('project-info__due');
  projectInfoElement.appendChild(projectDueDateElement);

  projectDiv.appendChild(projectInfoElement);

  project.todos.forEach(todo => {
    const todoCard = displayTodoCard(todo, project)
    projectDiv.appendChild(todoCard);
  })

  return projectDiv;
}

export function displayProjectList(projects, onProjectSelect) {
  const projectListElement = document.createElement('div');
  projectListElement.classList.add('project-list');

  for (const project of projects) {
    const projectLink = document.createElement('button');
    projectLink.classList.add('btn','btn-sidebar');
    projectLink.textContent = `${project.title}`;

    projectLink.addEventListener('click', (e) => {
      onProjectSelect(project);
    })

    projectListElement.appendChild(projectLink);
  }

  return projectListElement
}

function createTodoEditForm(todo, displayDiv, project) {
  const todoForm = document.createElement('form');
  const todoInfoDiv = document.createElement('div');

  const todoNameInputDiv = document.createElement('div');
  const todoNameLabel = document.createElement('label');
  todoNameLabel.textContent = 'Todo Name'
  todoNameLabel.htmlFor ='name'
  const todoNameInput = document.createElement('input');
  todoNameInput.value = `${todo.name}`;
  todoNameInput.type = 'text';
  todoNameInput.id = 'name'
  todoNameInputDiv.appendChild(todoNameLabel);
  todoNameInputDiv.appendChild(todoNameInput);

  const dueDateInputDiv = document.createElement('div');
  const todoDueLabel = document.createElement('label');
  todoDueLabel.textContent = 'Due Date'
  todoDueLabel.htmlFor ='dueDate'
  const todoDueInput = document.createElement('input');
  todoDueInput.value = `${todo.dueDate}`;
  todoDueInput.type = 'date';
  todoDueInput.id = 'dueDate';
  dueDateInputDiv.appendChild(todoDueLabel);
  dueDateInputDiv.appendChild(todoDueInput);

  const todoEditCancelButton = createButton('Cancel', () => {
    todoDiv.innerHTML = ''
    todoDiv.appendChild(disaplyTodo(todo));
  })
  todoEditCancelButton.classList.add('btn')

  todoInfoDiv.appendChild(todoNameInputDiv);
  
  todoInfoDiv.appendChild(dueDateInputDiv);
  todoInfoDiv.appendChild(todoEditCancelButton);
  todoInfoDiv.classList.add('info-edit-form')

  const todoDescDiv = document.createElement('div');
  const todoDescLabel = document.createElement('label');
  todoDescLabel.textContent = 'Description';
  todoDescLabel.for = 'input-desc'
  const todoDescInput = document.createElement('textarea');
  todoDescInput.classList.add('input-desc');
  todoDescInput.id = 'inputDesc';

  todoDescDiv.appendChild(todoDescLabel);
  todoDescDiv.appendChild(todoDescInput);

  const todoSubmit = document.createElement('button');
  todoSubmit.textContent = 'Save Changes';
  
  todoForm.appendChild(todoInfoDiv);
  todoForm.appendChild(todoDescDiv);
  todoForm.appendChild(todoSubmit);
  
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    displayDiv.innerHTML = ''
    todo.name = todoNameInput.value;
    todo.dueDate = todoDueInput.value;
    todo.description = todoDescInput.value;
    console.log(todo)
    
    displayDiv.replaceWith(displayTodoCard(todo, project));
  })
  return todoForm;

}