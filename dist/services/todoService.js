const todos = [];
export const todoService = {
    getAll() {
        return todos;
    },
    getById(id) {
        if (id) {
            return todos.find((todo) => todo.id === id);
        }
        else {
            return undefined;
        }
    },
    create(data) {
        const newTodo = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date(),
        };
        todos.push(newTodo);
        return newTodo;
    },
    update(id, data) {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index === -1) {
            return undefined;
        }
        const currentTodo = todos[index];
        todos[index] = {
            ...currentTodo,
            ...data,
        };
        return todos[index];
    },
    delete(id) {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index === -1) {
            return undefined;
        }
        const [deletedTodo] = todos.splice(index, 1);
        return deletedTodo;
    },
    toggleCompleted(id) {
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) {
            return undefined;
        }
        todo.completed = !todo.completed;
        return todo;
    },
};
//# sourceMappingURL=todoService.js.map