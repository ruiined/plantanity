import { connectDB } from "@lib/db";
import Task from "@models/task";

const addTask = async (req, res) => {
  if (!req.query.task) res.status(400).send("task parameter required.");
  await connectDB();
  const task = await Task.create({ title: req.query.task });
  await res.status(200).json({ task });
};

export default addTask;
