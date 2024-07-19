
export default class Project {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  static deleteProject(project, projects) {
    
    const index = projects.indexOf(project);;
    if (index > -1) {
      projects.splice(index, 1);
    }
  }
}

