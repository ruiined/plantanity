import mongoose from "mongoose";
import Task from "@models/task";

module.exports = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/plantanity-test");

  await Task.deleteMany({});

  const task1 = new Task({ title: "Water plants" });
  await task1.save();

  const task2 = new Task({ title: "Drink water" });
  await task2.save();

  await mongoose.connection.close();

  return null;
};

export {};
