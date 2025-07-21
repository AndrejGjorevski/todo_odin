import { TodoStorage } from "./todoStorage";

const ProjectStorage = {
    getAll: function () {
        const raw = localStorage.getItem("projects");
        if (!raw) return [];
        try {
            return JSON.parse(raw);
        } catch (e) {
            console.error("Error parsing projects from local storage: ", e);
            return [];
        }
    },

    save: function (project) {
        const projects = this.getAll();
        const index = projects.findIndex(p => p && p.id === project.id);
        if (index === -1) {
            projects.push(project);
        } else {
            projects[index] = project;
        }

        localStorage.setItem("projects", JSON.stringify(projects));
    },

    delete: function (projectId) {
        const projects = this.getAll().filter(p => p.id !== projectId);
        localStorage.setItem("projects", JSON.stringify(projects));
    },

    addTodoToProject: function (todoId, projectId) {
        const todoObj = TodoStorage.getAll().find(t => t.id === todoId);
        const projectObj = this.getAll().find(p => p.id === projectId);
        projectObj.todos.push(todoObj);
        this.save(projectObj);
    },

    clearProjects: function () {
        localStorage.removeItem("projects");
    }
}

export { ProjectStorage }