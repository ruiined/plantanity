import { ObjectId } from "bson";
import connectMongo from "@lib/mongodb";
import Task from "@models/task";

const completeTask = async (req, res) => {
  let task = encodeURI(req.query.task);
  await connectMongo();
  const tasks = await Task.findOneAndUpdate(
    { _id: new ObjectId(task) },
    [{ $set: { completed: { $eq: [false, "$completed"] } } }],
    { new: true }
  );
  res.status(200).json({ tasks });
};

export default completeTask;
