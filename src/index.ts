import "dotenv/config";

import express from "express";
import router from "./routes/routes.js";
import { connectionDB } from "./config/db.js";

const app = express();

const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

// Main Routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({
    message: "Orbit Server is running and Github Tested",
    port: PORT,
    status: "healthy",
    time: new Date().toLocaleString(),
  });
});

// Database Connection and Server Start
async function startServer() {
  try {
    await connectionDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exitCode = 1; // Set exit code to indicate failure
  }
}


startServer();