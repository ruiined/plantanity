import React from "react";

interface DropdownInterface {
  removeTask: React.ChangeEvent<HTMLInputElement>;
  task: {
    completed: boolean;
    _id: string;
  };
}

export const Dropdown = ({ removeTask, task }: DropdownInterface) => {
  return (
    // TODO: Export SVG
    <div className="dropdown">
      <label tabIndex={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="show-on-hover h-6 w-6 text-gray-300 hover:text-green-500 hover:cursor-pointer"
          fill="none"
          viewBox="0 0 30 30"
          stroke="currentColor"
          data-testid="task-dropdown"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-1 shadow bg-base-100 rounded-md w-22"
      >
        {/* TODO: Change _id from parameter to event */}
        <li onClick={() => removeTask(task._id)} data-testid="task-delete">
          <a className="hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 hover:text-red-500 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};
