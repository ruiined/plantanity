import { connectDB } from '@lib/db';
import Task from '@models/task';

import type { NextApiRequest, NextApiResponse } from "next";

const removeTask = async (req: NextApiRequest, res: NextApiResponse) => {
  let taskId = req.query.task;
  await connectDB();
  const tasks = await Task.deleteOne({ _id: taskId });
  res.status(200).json({ tasks });
};

export default removeTask;
