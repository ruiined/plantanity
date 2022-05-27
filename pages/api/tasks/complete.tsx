import { ObjectId } from "bson";
import { connectDB } from "@lib/db";
import Task from "@models/task";

const completeTask = async (req, res) => {
  let task = encodeURI(req.query.task);
  await connectDB();
  const tasks = await Task.findOneAndUpdate(
    { _id: new ObjectId(task) },
    [{ $set: { completed: { $eq: [false, "$completed"] } } }],
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default completeTask;
