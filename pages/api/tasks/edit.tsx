import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const editTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  if (!body.query.task) res.status(400).send("task parameter required.");
  let task = body.query.task;
  let id = body.query.id;
  await connectDB();
  const tasks = await Task.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { title: task } },
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default editTask;
