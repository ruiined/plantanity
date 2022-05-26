import connectMongo from "@lib/mongodb";
import Task from "@models/task";

const getTasks = async (req, res) => {
  await connectMongo();
  const tasks = await Task.find({});
  await res.status(200).json({ tasks });
};

export default getTasks;
