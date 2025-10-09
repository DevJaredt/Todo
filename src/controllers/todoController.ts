import type { Request, Response } from "express";
import { todoService } from "../services/todoService.js";

export const todoController = {
  async getAll(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (err) {
      res.status(500).json({ message: "Failed to get todos", error: err });
    }
  },
  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ message: "Todo id is required" });
      }

      const todo = await todoService.getTodoById(id);
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json({ message: "Failed to get todo", error: err });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { title, description, completed } = req.body;
      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }
      const newTodo = await todoService.createTodo(title, description || "");
      res.status(201).json(newTodo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create todo", error: err });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ message: "Todo id is required" });
      }
      const updateData = req.body;
      const updatedTodo = await todoService.updateTodo(id, updateData);
      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.status(200).json(updatedTodo);
    } catch (err) {
      res.status(500).json({ message: "Failed to update todo", error: err });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ message: "Todo id is required" });
      }
      const deletedTodo = await todoService.deleteTodo(id);
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.status(200).json({ message: "Todo deleted", todo: deletedTodo });
    } catch (err) {
      res.status(500).json({ message: "Failed to delete todo", error: err });
    }
  },
  async toggleCompleted(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ message: "Todo id is required" });
      }
      const completedTodo = await todoService.completedTodo(id);
      if (!completedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.status(200).json(completedTodo);
    } catch (err) {
      res.status(500).json({ message: "Failed to complete todo", error: err });
    }
  },
};
