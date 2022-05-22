import React, { useCallback } from "react";

export function Uncompleted({ task, editTask, removeTask, completeTask }) {
  return (
    <div className="hover:bg-gray-100 h-14 p-3">
      <div
        contentEditable
        suppressContentEditableWarning={true}
        onBlur={(e) => editTask(e.currentTarget.textContent, task._id)}
      >
        {task.title}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-300 hover:text-red-500 hover:cursor-pointer float-right"
        fill="none"
        viewBox="0 0 30 30"
        stroke="currentColor"
        onClick={() => removeTask(task._id)}
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-300 hover:text-green-500 hover:cursor-pointer float-right"
        fill="none"
        viewBox="0 0 30 30"
        stroke="currentColor"
        strokeWidth={2}
        onClick={() => completeTask(task._id)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}
