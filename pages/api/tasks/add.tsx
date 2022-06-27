import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const addTask = async (req: NextApiRequest, res: NextApiResponse) => {
  let taskTitle = req.query.task;
  if (!taskTitle) res.status(400).send("Task parameter required");
  await connectDB();
  const task = await Task.create({ title: taskTitle });
  res.status(200).json({ task });
};

export default addTask;
