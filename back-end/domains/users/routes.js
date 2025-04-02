import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";


const router = Router();
const bcryptSalt = bcrypt.genSaltSync()


router.get("/", async (req, res) => {
  connectDB();

  try {
    const userDoc = await User.find();
    res.json("Olá, Mundo!");
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  connectDB();

  const { name, email, password } = req.body;
  const encryptePassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptePassword,
    });

    res.json(newUserDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
