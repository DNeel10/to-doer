export let projects = []

export default class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate
    this.todos = []
    projects.push(this);
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  static deleteProject(project) {
    const index = projects.indexOf(project);;
    if (index > -1) {
      projects.splice(index, 1);
    }
  }
}

