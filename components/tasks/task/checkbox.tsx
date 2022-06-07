import React from "react";

export const Checkbox = ({ completeTask, task }) => {
  return (
    <input
      type="checkbox"
      checked={task.completed}
      data-testid="task-checkbox"
      className="checkbox checkbox-secondary cursor-pointer float-left mr-4 ml-2"
      onChange={() => completeTask(task._id)}
    />
  );
};
