import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Verifie le token et recharge le user en base, un user supprime ou retrograde perd ses droits tout de suite
export async function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Non connecté" });

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(id);
  } catch {
    return res.status(401).json({ error: "Token invalide" });
  }

  if (!req.user) return res.status(401).json({ error: "Token invalide" });
  next();
}

export function requireAdmin(req, res, next) {
  if (req.user.role !== "ADMIN") return res.status(403).json({ error: "Réservé aux admins" });
  next();
}
