import type { Todo } from "../models/todo.model.js";

const todos: Todo[] = [];

export const todoService = {
  getAll() {
    return todos;
  },

  getById(id: string) {
    if (id) {
      return todos.find((todo) => todo.id === id);
    } else {
      return undefined;
    }
  },
  create(data: Omit<Todo, "id" | "createdAt">) {
    const newTodo: Todo = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    todos.push(newTodo);
    return newTodo;
  },

  update(id: string, data: Partial<Omit<Todo, "id" | "createdAt">>) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return undefined;
    }

    const currentTodo = todos[index];
    todos[index] = {
      ...currentTodo,
      ...data,
    } as Todo;
    return todos[index];
  },
  delete(id: string) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return undefined;
    }
    const [deletedTodo] = todos.splice(index, 1);
    return deletedTodo;
  },
  toggleCompleted(id: string) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return undefined;
    }

    todo.completed = !todo.completed;
    return todo;
  },
};
