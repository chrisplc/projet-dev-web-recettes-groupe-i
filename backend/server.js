import express from "express";
import connection from "./models/db.js";

const app = express();

app.use(express.json());

app.get("/api/health", async (req, res) => {
  try {
    await connection.authenticate();
    res.json({ status: "ok", database: "up" });
  } catch {
    res.status(503).json({ status: "error", database: "down" });
  }
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
