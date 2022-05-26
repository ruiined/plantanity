import { ObjectId } from "bson";
import connectMongo from "../../../lib/mongodb";
import Task from "../../../models/task";

const editTask = async (req, res) => {
  if (!req.query.task) res.status(400).send("task parameter required.");
  let task = req.query.task;
  let id = req.query.id;
  await connectMongo();
  const tasks = await Task.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { title: task } },
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default editTask;
