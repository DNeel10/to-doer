

class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }
}

export default Project;