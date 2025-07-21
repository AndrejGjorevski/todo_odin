import { createProjectCard, createTodoCard } from "./cardCreation";
import { project, todo } from "./model";
import { ProjectStorage } from "./projectStorage";
import { TodoStorage } from "./todoStorage";

const InitialPage = function () {
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    const storedProjects = ProjectStorage.getAll();
    const existingDefaultProject = storedProjects.find(p => p.title === "Default Project");

    if (existingDefaultProject !== undefined) {
        tab.innerText = existingDefaultProject.title;
        if (existingDefaultProject.todos.length !== 0) {
            for (const todo of existingDefaultProject.todos) {
                createTodoCard(todo.title, todo.dueDate, todo.priority, todo.id);
            }
        }
    } else {
        const defaultProject = new project("Default Project", "The default project where all todos go, if you haven't selected another project");
        tab.innerText = defaultProject.title;
        ProjectStorage.save(defaultProject);
    }
};

const AllProjectsPage = function () {
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    tab.innerText = "All Projects";
    const storedProjects = ProjectStorage.getAll();

    for (const project of storedProjects) {
        createProjectCard(project.title, project.description, project.todos.length, project.id);
    }
};

const AllTodosPage = function () {
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    tab.innerText = "All Tasks";
    const storedTodos = TodoStorage.getAll();

    for (const todo of storedTodos) {
        createTodoCard(todo.title, todo.dueDate, todo.priority, todo.id);
    }
};

const SelectedProjectPage = function (projectId) {
    const projectObj = ProjectStorage.getAll().find(p => p.id === projectId);
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    tab.innerText = projectObj.title;

    for (const todo of projectObj.todos) {
        createTodoCard(todo.title, todo.dueDate, todo.priority, todo.id);
    }
}

const SelectedTodoDetails = function (todoId) {
    const todoObj = TodoStorage.getAll().find(t => t.id === todoId);
    const title = document.getElementById("details-title");
    const description = document.getElementById("details-description");
    const dueDate = document.getElementById("details-due-date");
    const priority = document.getElementById("details-priority");
    const deleteButton = document.getElementById("delete-todo");

    title.innerText = "Title: " + todoObj.title;
    description.innerText = "Description: " + todoObj.description;
    dueDate.innerText = "Due Date: " + todoObj.dueDate;
    priority.innerText = "Priority: " + todoObj.priority;
    deleteButton.dataset.id = todoId;

}

export { InitialPage, AllProjectsPage, AllTodosPage, SelectedProjectPage, SelectedTodoDetails }