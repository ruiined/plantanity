import React, { useEffect, useState } from "react";
import { Task } from "@components/tasks/task";
import { AddTask } from "@components/tasks/add";
import axios from "axios";

export const Tasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    setLoading(true);
    event.preventDefault();
    axios.post("/api/tasks/add?task=" + task).then(() => loadTasks());
    setTask("");
  };

  const removeTask = (rtask) => {
    setLoading(true);
    axios.post("/api/tasks/remove?task=" + rtask).then(() => loadTasks());
  };

  const editTask = (etask, taskId) => {
    setLoading(true);
    axios
      .post("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => loadTasks());
  };

  const completeTask = (ctask) => {
    setLoading(true);
    axios.post("/api/tasks/complete?task=" + ctask).then(() => loadTasks());
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

  if (!tasks) return <i>Loading...</i>;
  return (
    <div>
      {/* {loading ? (
        <Image alt="Loading" width={61} height={61} src="/loader.gif" />
      ) : ( */}
      <div className="w-full h-full flex-grow p-3 overflow-auto">
        <AddTask task={task} addTask={addTask} changeHandler={changeHandler} />
        <div data-testid="task-list" className="grid grid-cols-4 pt-3 mt-4 mb-12 mx-6">
          {tasks.map((task) => (
            <ul key={task._id} data-testid="task-item">
              <Task
                task={task}
                editTask={editTask}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
