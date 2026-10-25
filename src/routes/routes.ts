import {Router} from "express";
import todoRouter from "./todo/todo.routes.js";

const router = Router();

router.use("/todos", todoRouter);

export default router