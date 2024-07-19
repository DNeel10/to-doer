import { createButton } from './buttons.js';
import { saveItem } from './storage.js';
import { format } from 'date-fns';
import Project from './project.js';

export function displayTodoCard(todo, project, projects) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const todoInfo = document.createElement('div');
  todoInfo.classList.add('todo__info');

  const todoButtons = document.createElement('div');

  const todoNameDiv = document.createElement('div');
  const todoName = document.createElement('h3');
  todoName.textContent = todo.name
  todoName.classList.add('todo__name');
  todoNameDiv.appendChild(todoName);

  const todoDescDiv = document.createElement('div');
  const todoDesc = document.createElement('p');
  todoDesc.textContent = todo.description;
  todoDescDiv.appendChild(todoDesc);
  todoDescDiv.classList.add('todo__desc', 'hidden');

  const todoDue = document.createElement('p');
  todoDue.textContent = todo.dueDate;
  todoDue.classList.add('todo__due');

  // const todoStatus = document.createElement('p');
  // todoStatus.textContent = `${todo.status}`;
  // todoStatus.classList.add('todo__status');

  const deleteButton = createButton('🗑️', () => {
    project.deleteTodo(todo);
    saveItem(projects);
    todoDiv.remove();
  })
  deleteButton.classList.add('btn', 'btn-icons')

  const editButton = createButton('📝', () => {
    todoDiv.innerHTML = ''
    const todoEditForm = createTodoEditForm(todo, todoDiv, project, projects);

    todoDiv.appendChild(todoEditForm);
  })
  editButton.classList.add('btn', 'btn-icons');

  // append all elements to the todoDiv
  todoButtons.appendChild(editButton)
  todoButtons.appendChild(deleteButton)
  todoButtons.classList.add('buttons');

  todoInfo.appendChild(todoNameDiv);
  todoInfo.appendChild(todoDue);
  todoInfo.appendChild(todoButtons);

  todoDiv.appendChild(todoInfo);
  todoDiv.appendChild(todoDescDiv);

  todoDiv.addEventListener('click', () => {
    document.querySelectorAll('.todo-expanded').forEach(card => {
      if (card !== todoDiv) {
        card.classList.toggle('todo-expanded');
        card.querySelector('.todo__desc').classList.toggle('hidden');
      }
    })
    todoDiv.classList.toggle('todo-expanded');
    todoDescDiv.classList.toggle('hidden');


  })
  return todoDiv;
}

export function displayProject(project, projects, updateProjectList) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project')

  const projectInfoElement = document.createElement('div');
  projectInfoElement.classList.add('project-info');

  const projectName = document.createElement('h2');
  projectName.textContent = project.name;
  projectName.classList.add('project-name');
  projectInfoElement.appendChild(projectName);

  const editProjectButton = createButton('✏️', () => {
    
    const projectNameInputGroup = document.createElement('div');
    const projectNameLabel = document.createElement('label');
    projectNameLabel.htmlFor = 'projectName';
    projectNameLabel.textContent = 'Name';
    const projectNameInput = document.createElement('input');
    projectNameInput.value = project.name;
    projectNameInput.type = 'text';
    projectNameInput.id = 'projectName'
    projectNameInputGroup.appendChild(projectNameLabel);
    projectNameInputGroup.appendChild(projectNameInput);
    projectNameInputGroup.classList.add('form-group');
    projectName.replaceWith(projectNameInputGroup);

    const projectDueDateInputGroup = document.createElement('div');
    const projectDueDateLabel = document.createElement('label');
    projectDueDateLabel.htmlFor = 'date';
    projectDueDateLabel.textContent = 'Due Date';
    const projectDueDateInput = document.createElement('input');
    projectDueDateInput.type = 'date';
    projectDueDateInputGroup.classList.add('project-date-edit','form-group');
    const existingDueDate = document.querySelector('.project-info__due');
    projectDueDateInputGroup.appendChild(projectDueDateLabel);
    projectDueDateInputGroup.appendChild(projectDueDateInput);
    existingDueDate.replaceWith(projectDueDateInputGroup);

    const editButtonsGroup = document.createElement('div');

    const projectSubmit = createButton('Update', () => {
      project.name = projectNameInput.value;
      project.dueDate = format(projectDueDateInput.value, 'MM/dd/yyyy');
      saveItem(projects);
      updateProjectList();

      projectDiv.replaceWith(displayProject(project, projects, updateProjectList))
    });
    projectSubmit.classList.add('btn', 'btn-update');

    const editCancel = createButton('🗑️', () => {
      projectDiv.innerHTML = ''
      projectDiv.replaceWith(displayProject(project, projects, updateProjectList));
    })
    editCancel.classList.add('btn', 'btn-icons')

    editButtonsGroup.appendChild(editCancel);
    editButtonsGroup.appendChild(projectSubmit);
    editButtonsGroup.classList.add('edit-buttons');

    projectInfoElement.appendChild(editButtonsGroup);
  })
  editProjectButton.classList.add('btn-icons');

  
  const deleteProjectButton = createButton('🗑️', () => {
    Project.deleteProject(project, projects);
    saveItem(projects);
    
    projectDiv.innerHTML = '';
    projectDiv.replaceWith(displayProject(projects[0], projects, updateProjectList))
    updateProjectList();
  });

  deleteProjectButton.classList.add('btn', 'btn-icons');

  const projectButtons = document.createElement('div');
  projectButtons.classList.add('project-buttons');
  projectButtons.appendChild(editProjectButton);
  projectButtons.appendChild(deleteProjectButton);

  projectInfoElement.appendChild(projectButtons);

  const projectDueDateElement = document.createElement('p');
  projectDueDateElement.textContent = `Due: ${project.dueDate}`;
  projectDueDateElement.classList.add('project-info__due');
  projectInfoElement.appendChild(projectDueDateElement);
  // const deleteProjectButton = createButton('Delete', () => {
  //   Project.deleteProject(project, projects);
  //   saveItem(projects);
  //   projectDiv.innerHTML = '';
  // });

  // deleteProjectButton.classList.add('btn', 'btn-delete-project');
  // projectInfoElement.appendChild(deleteProjectButton);


  projectDiv.appendChild(projectInfoElement);

  project.todos.forEach(todo => {
    const todoCard = displayTodoCard(todo, project, projects)
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
    projectLink.textContent = project.name;

    projectLink.addEventListener('click', () => {
      document.querySelectorAll('.btn-sidebar').forEach(btn => {
        btn.classList.remove('btn-sidebar-active');
      })
      projectLink.classList.add('btn-sidebar-active');
      onProjectSelect(project);
    })

    projectListElement.appendChild(projectLink);
  }

  return projectListElement
}

function createTodoEditForm(todo, displayDiv, project, projects) {
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
    displayDiv.innerHTML = ''
    displayDiv.replaceWith(displayTodoCard(todo));
  })
  todoEditCancelButton.classList.add('btn')

  todoInfoDiv.appendChild(todoNameInputDiv);
  
  todoInfoDiv.appendChild(dueDateInputDiv);
  todoInfoDiv.appendChild(todoEditCancelButton);
  todoInfoDiv.classList.add('info-edit-form')

  const todoDescDiv = document.createElement('div');
  const todoDescLabel = document.createElement('label');
  todoDescLabel.textContent = 'Description';
  todoDescLabel.htmlFor = 'inputDesc'
  const todoDescInput = document.createElement('textarea');
  todoDescInput.classList.add('input-desc');
  todoDescInput.id = 'inputDesc';
  todoDescInput.value = todo.description;

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
    todo.dueDate = format(todoDueInput.value, 'MM/dd/yyyy');
    todo.description = todoDescInput.value;
    saveItem(projects);
    console.log(todo)
    
    displayDiv.replaceWith(displayTodoCard(todo, project, projects));
  })
  return todoForm;
}
