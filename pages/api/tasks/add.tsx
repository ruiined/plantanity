import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const addTask = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.task) res.status(400).send("Task parameter required");
  await connectDB();
  const task = await Task.create({ title: req.query.task });
  res.status(200).json({ task });
};

export default addTask;
