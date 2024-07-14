
export function displayTodo(todo) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const todoName = document.createElement('h2');
  todoName.textContent = `${todo.name}`
  todoName.classList.add('todo__name');

  const todoDesc = document.createElement('p');
  todoDesc.textContent = `${todo.description}`;
  todoDesc.classList.add('todo__desc');

  const todoDue = document.createElement('p');
  todoDue.textContent = `${todo.dueDate}`;
  todoDue.classList.add('todo__due');

  const todoStatus = document.createElement('p');
  todoStatus.textContent = `${todo.status}`;
  todoStatus.classList.add('todo__status');

  // append all elements to the todoDiv
  todoDiv.appendChild(todoName);
  todoDiv.appendChild(todoDesc);
  todoDiv.appendChild(todoDue);
  todoDiv.appendChild(todoStatus);

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
    projectDiv.appendChild(displayTodo(todo));
  })

  return projectDiv;
}

export function displayProjectList(projects, onProjectSelect) {
  const projectListElement = document.createElement('div');
  projectListElement.classList.add('project-list');

  for (const project of projects) {
    const projectLink = document.createElement('button');
    projectLink.classList.add('btn-sidebar');
    projectLink.textContent = `${project.title}`;

    projectLink.addEventListener('click', (e) => {
      onProjectSelect(project);
    })

    projectListElement.appendChild(projectLink);
  }

  return projectListElement
}