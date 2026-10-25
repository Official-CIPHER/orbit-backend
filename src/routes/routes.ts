import {Router} from "express";
import todoRouter from "./todo/todo.routes.js";

const router = Router();

router.use("/todos", todoRouter);

// halth check route
router.get("/health", (_req, res) => {
  res.status(200)
  .json({
    success: true,
    status: "ok",
    timeStamp: new Date().toISOString()
  });
});

export default router