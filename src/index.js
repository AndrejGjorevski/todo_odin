import "./styles.css";
import { InitialPage, AllProjectsPage, AllTodosPage } from "./tabController";

InitialPage();

const allProjectsButton = document.getElementById("all-projects-btn");
const allTodosButton = document.getElementById("all-todos-btn");
const logo = document.getElementById("logo");
const createProjectButton = document.getElementById("create-project-btn");
const createTodoButton = document.getElementById("create-todo-btn");
const closeProjectDialog = document.getElementById("close-project-dialog");
const closeTodoDialog = document.getElementById("close-todo-dialog");

allProjectsButton.addEventListener("click", function () {
    AllProjectsPage();
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
})

createTodoButton.addEventListener("click", function () {
    document.getElementById("todo-dialog").showModal();
})

closeTodoDialog.addEventListener("click", function () {
    document.getElementById("todo-dialog").close();
})