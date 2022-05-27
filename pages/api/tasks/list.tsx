import { connectDB } from "@lib/db";
import Task from "@models/task";

const getTasks = async (req, res) => {
  await connectDB();
  const tasks = await Task.find({});
  await res.status(200).json({ tasks });
};

export default getTasks;
