import express, { Request, Response } from "express";

import {
  createNewEnterprise,
  getAllEnterprises,
} from "../Controllers/enterprise";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const allEnterprises = await getAllEnterprises();
  res.json({ data: allEnterprises });
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await createNewEnterprise(req.body);
    res.status(201).json({ message: "created successfully" });
  } catch (err: any) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

export default router;
