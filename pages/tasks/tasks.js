import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AddTask } from "./add";
import axios from "axios";

export const Tasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("");

  let changeHandler = (event) => {
    setTask(event.target.value);
  };

  let addTask = (event) => {
    setLoading(true);
    event.preventDefault();
    axios.get("/api/tasks/add?task=" + task).then(() => loadTasks());
  };

  let removeTask = (rtask) => {
    setLoading(true);
    axios.get("/api/tasks/remove?task=" + rtask).then(() => loadTasks());
  };

  let editTask = (etask, taskId) => {
    setLoading(true);
    axios
      .get("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => loadTasks());
  };

  let completeTask = (ctask) => {
    setLoading(true);
    axios.get("/api/tasks/complete?task=" + ctask).then(() => loadTasks());
  };

  let loadTasks = () => {
    axios.get("/api/tasks/list").then((res) => {
      setData(res.data.tasks);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    loadTasks();
  }, []);

  if (!data) return "Loading...";
  return (
    <div>
      <div className="w-full h-full flex-grow p-3 overflow-auto">
        {loading ? (
          <Image alt="Loading" width={61} height={61} src="/loader.gif" />
        ) : (
          <AddTask addTask={addTask} changeHandler={changeHandler} />
        )}
        <div className="columns-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="hover:bg-gray-100 h-14 p-3 draggable"
            >
              {item.completed === false ? (
                <div
                  contentEditable
                  suppressContentEditableWarning={true}
                  onBlur={(e) =>
                    editTask(e.currentTarget.textContent, item._id)
                  }
                >
                  {item.title}
                </div>
              ) : (
                "no"
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-red-500 hover:cursor-pointer float-right"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
                onClick={() => removeTask(item._id)}
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
                onClick={() => completeTask(item._id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
