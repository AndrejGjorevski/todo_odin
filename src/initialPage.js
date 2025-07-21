import { createTodoCard } from "./cardCreation";
import { project } from "./model";
import { ProjectStorage } from "./projectStorage";

const InitialPage = (function () {
    const tab = document.getElementById("tab");
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
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
})();

export { InitialPage }