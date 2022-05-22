import clientPromise from "@lib/mongodb";

const addTask = async (req, res) => {
  if (!req.query.task) {
    return res.status(400).send("task parameter required.");
  }
  let task = req.query.task;
  const client = await clientPromise;
  const db = client.db("plantanity");
  const tasks = await db
    .collection("tasks")
    .insert({ title: task, completed: false });
  res.status(200).json({ tasks });
};

export default addTask;
