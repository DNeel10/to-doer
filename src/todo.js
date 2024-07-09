function createTodo(name, description, dueDate, priority, status = 'Incomplete') {
  return { 
    name, 
    description, 
    dueDate, 
    priority, 
    status,
    changeStatus(newStatus) {
      const validStatuses = ['Incomplete', 'In Progress', 'Completed']
      if (validStatuses.includes(status)) {
        this.status = newStatus;
      } else {
        console.log('Invalid Stauts');
      }
    }
  };
}

export default createTodo