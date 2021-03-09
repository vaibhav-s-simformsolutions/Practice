import { Router } from 'express';
import {
  createtodosdb,
  gettodoesdb,
  deletetodosdb,
  updatetodosdb,
} from "../controllers/todosdb";

const router = Router();
//db
router.post("/", createtodosdb);
router.get("/", gettodoesdb);
router.patch("/:id", updatetodosdb);
router.delete("/:id", deletetodosdb);

export default router;