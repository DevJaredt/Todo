import express, {} from "express";
import { TodoRoutes } from "./routes/todoRoutes.js";
const app = express();
const PORT = 3000;
// Middleware para parsear JSON
app.use(express.json());
app.use("/api/todos", TodoRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map