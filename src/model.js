function todo(title, description, dueDate, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function project(title, description) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.todos = [];
}

export { todo, project };