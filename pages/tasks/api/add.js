import clientPromise from "../../../lib/mongodb";

export const addTask = async (req, res) => {
  if (!req.query.task) {
    return res.status(400).send("task parameter required.");
  }
  let task = req.query.task;
  console.log(task);
  const client = await clientPromise;
  const db = client.db("plantanity");
  const tasks = await db.collection("tasks").insert({ title: task });
  res.status(200).json({ tasks });
};
