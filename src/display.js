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

  console.log(todoDiv);
  return todoDiv;
  
}

export function displayProject(project) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  const projectName = document.createElement('h2');
  projectName.textContent = `${project.title}`;
  projectDiv.appendChild(projectName);

  const projectDueDateElement = document.createElement('p');
  projectDueDateElement.textContent = `${project.dueDate}`;
  projectDiv.appendChild(projectDueDateElement);

  project.todos.forEach(todo => {
    projectDiv.appendChild(displayTodo(todo));
  })
  return projectDiv;
}