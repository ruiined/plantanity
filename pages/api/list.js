import clientPromise from "../../lib/mongodb";

const getTasks = async (req, res) => {
  const client = await clientPromise;
  const db = client.db("plantanity");
  const tasks = await db.collection("tasks").find({}).toArray();
  res.status(200).json({ tasks });
};

export default getTasks;
