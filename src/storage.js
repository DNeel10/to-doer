import Project from './project.js';

export function saveItem(item) {
  const itemJSON = JSON.stringify(item);
  localStorage.setItem('projects', itemJSON);
}

export function loadItem(item) {
  const data = localStorage.getItem(item)
  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData.map(proj => {
      const project = new Project(proj.name, proj.dueDate);
      proj.todos.forEach(todo => project.addTodo(todo));
      return project;
    });
  }
  return []
  
}