import { Router } from "express";
import { todoController } from "../controllers/todoController.js";
const router = Router();
router.get("/", todoController.getAll);
router.get("/:id", todoController.getById);
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);
router.patch("/:id/toggle", todoController.toggleCompleted);
export const TodoRoutes = router;
//# sourceMappingURL=todoRoutes.js.map