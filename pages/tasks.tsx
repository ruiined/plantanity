import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Task } from "@components/tasks/task";
import { AddTask } from "@components/tasks/add";

export const Tasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    e.preventDefault();
    axios.post("/api/tasks/add?task=" + task).then(() => {
      loadTasks();
      toast.success("Task added!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
    setTask("");
  };

  const removeTask = (rtask: string) => {
    setLoading(true);
    axios.post("/api/tasks/remove?task=" + rtask).then(() => {
      loadTasks();
      toast.warn("Task deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  const editTask = (etask: string, taskId: string) => {
    setLoading(true);
    axios
      .post("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => loadTasks());
  };

  const completeTask = (ctask: string) => {
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
        <div
          data-testid="task-list"
          className="grid grid-cols-4 pt-3 mt-4 mb-12 mx-6"
        >
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
