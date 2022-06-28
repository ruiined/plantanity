import { model, models, Schema } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = models.Task || model("Task", taskSchema);

export default Task;
module.exports = Task;
