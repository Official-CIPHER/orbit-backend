import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

// Main Routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({
    message: "Orbit Server is running",
    port: PORT,
    status: "healthy",
    time: new Date().toLocaleString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
