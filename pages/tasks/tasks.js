import { Uncompleted } from "./uncompleted";
import { Completed } from "./completed";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AddTask } from "./add";
import axios from "axios";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("");

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    setLoading(true);
    event.preventDefault();
    axios.get("/api/tasks/add?task=" + task).then(() => loadTasks());
  };

  const removeTask = (rtask) => {
    setLoading(true);
    axios.get("/api/tasks/remove?task=" + rtask).then(() => loadTasks());
  };

  // const editChangeHandler = (taskId, event) => {
  //   editTask(event.currentTarget.textContent, taskId);
  // };

  const editTask = (etask, taskId) => {
    setLoading(true);
    axios
      .get("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => loadTasks());
  };

  const completeTask = (ctask) => {
    setLoading(true);
    axios.get("/api/tasks/complete?task=" + ctask).then(() => loadTasks());
  };

  const loadTasks = () => {
    axios.get("/api/tasks/list").then((res) => {
      setTasks(res.data.tasks);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    loadTasks();
  }, []);

  if (!tasks) return "Loading...";
  return (
    <div>
      {loading ? (
        <Image alt="Loading" width={61} height={61} src="/loader.gif" />
      ) : (
        <div className="w-full h-full flex-grow p-3 overflow-auto">
          <AddTask addTask={addTask} changeHandler={changeHandler} />

          <div className="columns-4">
            {tasks
              .filter((task) => task.completed)
              .map((task) => (
                <Uncompleted
                  key={task._id}
                  task={task}
                  editTask={editTask}
                  removeTask={removeTask}
                  completeTask={completeTask}
                />
              ))}
              {tasks
              .filter((task) => !task.completed)
              .map((task) => (
                <Completed
                  key={task._id}
                  task={task}
                  editTask={editTask}
                  removeTask={removeTask}
                  completeTask={completeTask}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
