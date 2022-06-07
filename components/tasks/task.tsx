import React from "react";
import { Checkbox } from "./task/checkbox";
import { Dropdown } from "./task/dropdown";

export function Task({ task, editTask, removeTask, completeTask }) {
  return (
    <li className="flex transition duration-300 hover:bg-gray-50 h-16 p-3 rounded-md items-center">
      <Checkbox completeTask={completeTask} task={task} />
      <div
        contentEditable
        suppressContentEditableWarning={true}
        className="grow transition duration-300 focus:outline-none focus:text-yellow-900"
        onBlur={(e) => editTask(e.currentTarget.textContent, task._id)}
      >
        {task.title}
      </div>
      <Dropdown removeTask={removeTask} task={task} />
    </li>
  );
}
