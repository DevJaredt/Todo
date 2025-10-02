import { todoService } from "../services/todoService.js";
export const todoController = {
    getAll(req, res) {
        const todos = todoService.getAll();
        res.json(todos);
    },
    getById(req, res) {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Todo is requerid" });
        }
        const todo = todoService.getById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo);
    },
    create(req, res) {
        const { title, description, completed } = req.body;
        if (!title) {
            return res.status(400).json({ message: "title is required" });
        }
        const newTodo = todoService.create({
            title,
            description: description || "",
            completed: completed || false,
        });
        res.status(201).json(newTodo);
    },
    update(req, res) {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "Todo is required",
            });
        }
        const updateData = req.body;
        const updatedTodo = todoService.update(id, updateData);
        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }
        res.json(updatedTodo);
    },
    delete(req, res) {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "Todo is required",
            });
        }
        const deletedTodo = todoService.delete(id);
        if (!deletedTodo) {
            res.status(404).json({
                message: "Todo not found",
            });
        }
        res.json({ message: "Todo deleted successfully", todo: deletedTodo });
    },
    toggleCompleted(req, res) {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "Todo is required",
            });
        }
        const updatedTodo = todoService.toggleCompleted(id);
        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }
        res.json(updatedTodo);
    },
};
//# sourceMappingURL=todoController.js.map