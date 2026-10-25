import { Router } from "express";

const todoRouter = Router();

todoRouter.get("/", (_req, res) => {
  res.json({
    message: "Todo route is working",
    status: "healthy",
    time: new Date().toLocaleString(),
  });
});

export default todoRouter;