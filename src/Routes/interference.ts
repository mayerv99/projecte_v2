import express, { Request, Response } from "express";

import {
  getInterferences,
  createInterference,
} from "../Controllers/interference";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const interferences = await getInterferences(id);

  res.json({ message: interferences });
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await createInterference(req.body);
    res.status(201).json({ message: "created successfully" });
  } catch (err: any) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

export default router;
