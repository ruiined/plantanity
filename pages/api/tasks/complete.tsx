import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const completeTask = async (req: NextApiRequest, res: NextApiResponse) => {
  let taskId = req.query.task;
  await connectDB();
  const tasks = await Task.findOneAndUpdate(
    { _id: taskId },
    [{ $set: { completed: { $eq: [false, "$completed"] } } }],
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default completeTask;
