import { ObjectId } from "bson";
import clientPromise from "../../lib/mongodb";

const completeTask = async (req, res) => {
  if (!req.query.task) {
    return res.status(400).send("task parameter required.");
  }
  let task = encodeURI(req.query.task);
  console.log(task);
  const client = await clientPromise;
  const db = client.db("plantanity");
  const tasks = await db
    .collection("tasks")
    .findOneAndUpdate(
      { _id: ObjectId(task) },
      [{ $set: { completed: { $eq: [false, "$completed"] } } }],
      { new: true }
    );
  res.status(200).json({ tasks });
};

export default completeTask;
