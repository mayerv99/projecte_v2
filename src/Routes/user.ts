import express, { Request, Response } from "express";
import { getUsers, createUser } from "../Controllers/user";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const users = await getUsers(id);
  res.json({ message: users });
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await createUser(req.body);
    res.status(201).json({ message: "created successfully" });
  } catch (err: any) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

export default router;
