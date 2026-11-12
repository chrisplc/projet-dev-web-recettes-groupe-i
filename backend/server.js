import express from "express";
import bcrypt from "bcryptjs";
import connection from "./models/db.js";
import User from "./models/user.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

app.get("/api/health", async (req, res) => {
  try {
    await connection.authenticate();
    res.json({ status: "ok", database: "up" });
  } catch {
    res.status(503).json({ status: "error", database: "down" });
  }
});

await connection.sync();

// Cree l'admin du .env au premier demarrage
if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
  await User.findOrCreate({
    where: { email: process.env.ADMIN_EMAIL },
    defaults: {
      password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
      role: "ADMIN",
    },
  });
}

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
