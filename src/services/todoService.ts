import { todoModel, type ITodo } from "../models/todo.model.js";

export const todoService = {
  async getAllTodos(): Promise<ITodo[]> {
    return await todoModel.find();
  },

  async getTodoById(id: string): Promise<ITodo | null> {
    return await todoModel.findById(id);
  },

  async createTodo(title: string, description: string): Promise<ITodo> {
    const todo = new todoModel({ title, description });
    return await todo.save();
  },
  async updateTodo(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return await todoModel.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteTodo(id: string): Promise<ITodo | null> {
    return await todoModel.findByIdAndDelete(id);
  },
  async completedTodo(id: string): Promise<ITodo | null> {
    return await todoModel.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );
  },
};
