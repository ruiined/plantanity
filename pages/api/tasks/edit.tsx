import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const editTask = async (req: NextApiRequest, res: NextApiResponse) => {
  let task = req.query.task;
  let id = req.query.id;
  if (!task) res.status(400).send("task parameter required.");
  await connectDB();
  const tasks = await Task.findOneAndUpdate(
    { _id: id },
    { $set: { title: task } },
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default editTask;
