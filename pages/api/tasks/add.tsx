import connectMongo from "@lib/mongodb";
import Task from "@models/task";

const addTask = async (req, res) => {
  if (!req.query.task) res.status(400).send("task parameter required.");
  await connectMongo();
  const task = await Task.create({ title: req.query.task });
  await res.status(200).json({ task });
};

export default addTask;
