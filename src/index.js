import "./styles.css";
import { InitialPage, AllProjectsPage, AllTodosPage } from "./tabController";

InitialPage();

const allProjectsButton = document.getElementById("all-projects-btn");
const allTodosButton = document.getElementById("all-todos-btn");
const logo = document.getElementById("logo");

allProjectsButton.addEventListener("click", function() {
    AllProjectsPage();
});

allTodosButton.addEventListener("click", function () {
    AllTodosPage();
})

logo.addEventListener("click", function () {
    InitialPage();
})