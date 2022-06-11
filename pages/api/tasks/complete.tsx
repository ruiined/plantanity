import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "bson";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const completeTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  let task = encodeURI(body.query.task);
  await connectDB();
  const tasks = await Task.findOneAndUpdate(
    { _id: new ObjectId(task) },
    [{ $set: { completed: { $eq: [false, "$completed"] } } }],
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default completeTask;
