import { createProjectCard, createTodoCard } from "./cardCreation";
import { project } from "./model";
import { ProjectStorage } from "./projectStorage";
import { TodoStorage } from "./todoStorage";

const InitialPage = (function () {
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    const storedProjects = ProjectStorage.getAll();
    const existingDefaultProject = storedProjects.find(p => p.title === "Default Project");

    if (existingDefaultProject !== undefined) {
        tab.innerText = existingDefaultProject.title;
        if (existingDefaultProject.todos.length !== 0) {
            for (const todo of existingDefaultProject.todos) {
                createTodoCard(todo.title, todo.dueDate, todo.priority);
            }
        }
    } else {
        const defaultProject = new project("Default Project", "The default project where all todos go, if you haven't selected another project");
        tab.innerText = defaultProject.title;
        ProjectStorage.save(defaultProject);
    }
});

const AllProjectsPage = (function () {
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    tab.innerText = "All Projects";
    const storedProjects = ProjectStorage.getAll();

    for (const project of storedProjects) {
        createProjectCard(project.title, project.description, project.todos.length);
    }
});

const AllTodosPage = (function () {
    const grid = document.getElementById("grid-container");
    grid.innerHTML = "";
    const tab = document.getElementById("tab");
    tab.innerText = "All Tasks";
    const storedTodos = TodoStorage.getAll();

    for (const todo of storedTodos) {
        createTodoCard(todo.title, todo.description, todo.dueDate, todo.priority);
    }
});

export { InitialPage, AllProjectsPage, AllTodosPage }