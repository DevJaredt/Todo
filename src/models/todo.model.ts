import mongoose from "mongoose";

export interface ITodo extends Document {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const todoSchema = new mongoose.Schema<ITodo>({
  title: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const todoModel = mongoose.model<ITodo>("Todo", todoSchema);
