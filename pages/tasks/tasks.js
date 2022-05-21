import React, { useEffect, useState } from "react";
import Image from "next/image";
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
    axios.get("../api/add?task=" + task).then(() => loadTasks());
  };

  let removeTask = (rtask) => {
    setLoading(true);
    axios.get("../api/remove?task=" + rtask).then(() => loadTasks());
  };

  let completeTask = (ctask) => {
    setLoading(true);
    axios.get("../api/complete?task=" + ctask).then(() => loadTasks());
  };

  let loadTasks = () => {
    axios.get("../api/list").then((res) => {
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
          <form className="" onSubmit={addTask}>
            <input
              className=""
              type="text"
              name="task"
              autoComplete="off"
              autoFocus="true"
              onChange={changeHandler}
              placeholder="Enter your task here!"
            />
          </form>
        )}
        <div className="columns-3xs gap-8">
          {data.map((item) => (
            <div key={item.key} className="hover:bg-gray-100">
              <a
                alt="Complete"
                className="w-full aspect-video"
                onClick={() => completeTask(item._id)}
              >
                <p>{item.title}</p>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-red-500 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
                onClick={() => removeTask(item._id)}
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-red-500 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
                strokeWidth={2}
                // onClick={() => editTask(item._id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
