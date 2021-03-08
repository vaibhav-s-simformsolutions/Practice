import { Router } from "express";
import {
  createtodos,
  gettodoes,
  deletetodos,
  updatetodos,
} from "../controllers/todos";

const router = Router();

router.post("/", createtodos);
router.get("/", gettodoes);
router.patch("/:id", updatetodos);
router.delete("/:id", deletetodos);

export default router;
