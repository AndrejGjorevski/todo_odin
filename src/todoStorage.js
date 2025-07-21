const TodoStorage = {
    getAll: function () {
        const raw = localStorage.getItem('todos');
        if (!raw) return [];
        try {
            return JSON.parse(raw);
        } catch (e) {
            console.error("Error parsing todos from local storage: " + e);
            return [];
        }
    },

    save: function (todo) {
        const todos = this.getAll();
        const index = todos.findIndex(t => t && t.id === todo.id);
        if (index === -1) {
            todos.push(todo);
        } else {
            todos[index] = todo;
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    },

    delete: function (todoId) {
        const todos = this.getAll().filter(t => t.id !== todoId);
        localStorage.setItem('todos', JSON.stringify(todos));
    },

    cleanNullTodos: function () {
        const raw = localStorage.getItem('todos');
        if (!raw) return; // Nothing to clean

        try {
            const todos = JSON.parse(raw);
            if (!Array.isArray(todos)) return; // Unexpected data format

            const cleaned = todos.filter(item => item !== null);

            localStorage.setItem('todos', JSON.stringify(cleaned));
        } catch (e) {
            console.error('Failed to parse todos:', e);
        }
    }

}

export { TodoStorage };