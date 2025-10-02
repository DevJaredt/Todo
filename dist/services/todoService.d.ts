import type { Todo } from "../models/todo.model.js";
export declare const todoService: {
    getAll(): Todo[];
    getById(id: string): Todo | undefined;
    create(data: Omit<Todo, "id" | "createdAt">): Todo;
    update(id: string, data: Partial<Omit<Todo, "id" | "createdAt">>): Todo | undefined;
    delete(id: string): Todo | undefined;
    toggleCompleted(id: string): Todo | undefined;
};
//# sourceMappingURL=todoService.d.ts.map