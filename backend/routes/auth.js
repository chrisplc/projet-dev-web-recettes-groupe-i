import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();

function createToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

function publicUser(user) {
  return { id: user.id, email: user.email, role: user.role };
}

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || password.length < 8) {
    return res.status(400).json({ error: "Email et mot de passe de 8 caractères minimum requis" });
  }
  if (await User.findOne({ where: { email } })) {
    return res.status(409).json({ error: "Email déjà utilisé" });
  }

  try {
    // Le role n'est jamais lu depuis la requete, un inscrit est toujours USER
    const user = await User.create({ email, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ token: createToken(user), user: publicUser(user) });
  } catch {
    res.status(400).json({ error: "Email invalide" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = email && (await User.scope("withPassword").findOne({ where: { email } }));

  // Meme message dans les deux cas pour ne pas reveler quels emails existent
  if (!user || !password || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Email ou mot de passe incorrect" });
  }
  res.json({ token: createToken(user), user: publicUser(user) });
});

router.get("/me", requireAuth, (req, res) => {
  res.json(publicUser(req.user));
});

export default router;
