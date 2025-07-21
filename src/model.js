function todo(title, description, dueDate, priority, projectId) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectId = projectId;
}

function project(title, description) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.todos = [];
}

export { todo, project };