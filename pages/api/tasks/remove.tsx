import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const removeTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  if (!body.query.task) res.status(400).send("Task parameter required");
  let task = encodeURI(body.query.task);
  await connectDB();
  const tasks = await Task.deleteOne({ _id: new ObjectId(task) });
  res.status(200).json({ tasks });
};

export default removeTask;
