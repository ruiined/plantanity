import { ObjectId } from "bson";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const removeTask = async (req, res) => {
  if (!req.query.task) res.status(400).send("task parameter required.");
  let task = encodeURI(req.query.task);
  await connectDB();
  const tasks = await Task.deleteOne({ _id: new ObjectId(task) });
  res.status(200).json({ tasks });
};

export default removeTask;
