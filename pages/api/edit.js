import { ObjectId } from "bson";
import clientPromise from "../../lib/mongodb";

const editTask = async (req, res) => {
  if (!req.query.task) {
    return res.status(400).send("task parameter required.");
  }
  let task = req.query.task;
  let id = req.query.id;
  const client = await clientPromise;
  const db = client.db("plantanity");
  const tasks = await db
    .collection("tasks")
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { title: task } },
      { new: true }
    );
  res.status(200).json({ tasks });
};

export default editTask;
