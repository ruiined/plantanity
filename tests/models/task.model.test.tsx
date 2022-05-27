/**
 * @jest-environment node
 */

import mongoose from "mongoose";
import Task from "@models/task";
import "../dbHelper";

const task = {
  title: "Task Title",
};

describe("Task Schema", () => {
  it("creates a new task successfully", async () => {
    const validTask = new Task(task);
    const savedTask = await validTask.save();

    expect(savedTask._id).toBeDefined();
    expect(savedTask.title).toBe(task.title);
  });

  it("sets 'completed' to false by default upon creation", async () => {
    const validTask = new Task(task);
    const savedTask = await validTask.save();

    expect(savedTask.completed).toBeDefined();
    expect(savedTask.completed).toBe(false);
  });

  it("doesn't add a field if it's not in the schema", async () => {
    const invalidField = new Task({ ...task, boo: "boo" });
    const savedInvalidField = await invalidField.save();
    expect(savedInvalidField._id).toBeDefined();
    expect(savedInvalidField.boo).toBeUndefined();
  });

  it("throws an error if the required field isn't defined", async () => {
    const noRequiredField = new Task({});
    let err;
    try {
      await noRequiredField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.title).toBeDefined();
  });
});
