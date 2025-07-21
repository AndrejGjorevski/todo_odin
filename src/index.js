import "./styles.css";
import { InitialPage, AllProjectsPage, AllTodosPage, SelectedProjectPage } from "./tabController";
import { ProjectStorage } from "./projectStorage";
import { TodoStorage } from "./todoStorage";
import { todo, project } from "./model";

InitialPage();

//Switching tabs buttons
const allProjectsButton = document.getElementById("all-projects-btn");
const allTodosButton = document.getElementById("all-todos-btn");
const logo = document.getElementById("logo");

//Opening and closing the dialogs buttons
const createProjectButton = document.getElementById("create-project-btn");
const createTodoButton = document.getElementById("create-todo-btn");
const closeProjectDialog = document.getElementById("close-project-dialog");
const closeTodoDialog = document.getElementById("close-todo-dialog");

//Creating projects and todos buttons
const addProjectButton = document.getElementById("add-project-btn");
const addTodoButton = document.getElementById("add-todo-btn");

allProjectsButton.addEventListener("click", function () {
    AllProjectsPage();
    const projectCards = document.getElementsByClassName("project-card");

    for (const projectCard of projectCards) {
        projectCard.addEventListener("click", function () {

            SelectedProjectPage(this.dataset.id);
        });
    }
});

allTodosButton.addEventListener("click", function () {
    AllTodosPage();
});

logo.addEventListener("click", function () {
    InitialPage();
});

createProjectButton.addEventListener("click", function () {
    document.getElementById("project-dialog").showModal();
});

closeProjectDialog.addEventListener("click", function () {
    document.getElementById("project-dialog").close();
});

createTodoButton.addEventListener("click", function () {
    const allProjects = ProjectStorage.getAll();
    const todoProjectSelect = document.getElementById("todo-project");

    todoProjectSelect.innerHTML = "";
    for (const project of allProjects) {
        const option = document.createElement("option");
        option.value = project.id;
        option.innerText = project.title;
        todoProjectSelect.appendChild(option);
    }
    document.getElementById("todo-dialog").showModal();
});

closeTodoDialog.addEventListener("click", function () {
    document.getElementById("todo-dialog").close();
});

addProjectButton.addEventListener("click", function () {
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;

    ProjectStorage.save(new project(title, description));

    document.getElementById("project-title").value = "";
    document.getElementById("project-description").value = "";
    document.getElementById("project-dialog").close();
});

addTodoButton.addEventListener("click", function () {
    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;
    const project = document.getElementById("todo-project").value;

    const todoObj = new todo(title, description, dueDate, priority);
    TodoStorage.save(todoObj);

    ProjectStorage.addTodoToProject(todoObj.id, project);

    document.getElementById("todo-title").value = "";
    document.getElementById("todo-description").value = "";
    document.getElementById("todo-due-date").value = "";
    document.getElementById("todo-priority").selectedIndex = 0;
    document.getElementById("todo-project").selectedIndex = 0;
    document.getElementById("todo-dialog").close();
});

