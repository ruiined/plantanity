import React from "react";

import { Checkbox } from "./task/checkbox";
import { Dropdown } from "./task/dropdown";

interface TaskInterface {
  completeTask: React.ChangeEvent<HTMLInputElement>;
  removeTask: React.ChangeEvent<HTMLInputElement>;
  editTask: React.FormEventHandler<HTMLFormElement>;
  task: {
    title: string;
    completed: boolean;
    _id: string;
  };
}

export const Task = ({
  task,
  editTask,
  removeTask,
  completeTask,
}: TaskInterface) => {
  return (
    <li className="hover flex transition duration-300 hover:bg-gray-50 h-16 p-3 rounded-md text-[15px] items-center">
      <Checkbox completeTask={completeTask} task={task} />
      <div
        contentEditable
        suppressContentEditableWarning={true}
        className="grow transition duration-300 focus:outline-none focus:text-yellow-900"
        // FIXME: editing tasks (types & event & param)
        onBlur={(e) => editTask(e.currentTarget.textContent, task._id)}
      >
        {task.title}
      </div>
      <Dropdown removeTask={removeTask} task={task} />
    </li>
  );
};
