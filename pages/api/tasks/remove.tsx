import { ObjectId } from "bson";
import clientPromise from "@lib/mongodb";

const removeTask = async (req, res) => {
  if (!req.query.task) {
    return res.status(400).send("task parameter required.");
  }
  let task = encodeURI(req.query.task);
  const client = await clientPromise;
  const db = client.db("plantanity");
  const tasks = await db.collection("tasks").deleteOne({ _id: ObjectId(task) });
  res.status(200).json({ tasks });
};

export default removeTask;
