import express, { type Request, type Response } from "express";
import { TodoRoutes } from "./routes/todoRoutes.js";
import { connectDB } from "./config/database.js";

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

connectDB();

app.use("/api/todos", TodoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
