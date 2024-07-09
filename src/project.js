

class Project {
  constructor(title, dueDate) {
    this.title = title;
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
}

export default Project;