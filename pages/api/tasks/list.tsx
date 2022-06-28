import { connectDB } from '@lib/db';
import Task from '@models/task';

import type { NextApiRequest, NextApiResponse } from "next";

const fetchTasks = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

export default fetchTasks;
