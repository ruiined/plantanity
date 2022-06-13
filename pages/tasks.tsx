import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { Task } from "@components/tasks/task";
import { AddTask } from "@components/tasks/add";

export declare interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<string>("");

  const queryClient = useQueryClient();

  const getTasks = () =>
    axios.get("/api/tasks/list").then((res) => res.data.tasks);

  const { status, data, error } = useQuery<Task[], Error>("tasks", getTasks);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    axios.post("/api/tasks/add?task=" + task).then(() => {
      getTasks();
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
    axios.post("/api/tasks/remove?task=" + rtask).then(() => {
      getTasks();
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
    axios
      .post("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => getTasks());
  };

  const completeTask = (ctask: string) => {
    axios.post("/api/tasks/complete?task=" + ctask).then(() => getTasks());
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (status === "loading") {
    return <img alt="Loading" width={61} height={61} src="/loader.gif" />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  if (!tasks) return <i>No tasks yet</i>;

  return (
    <div className="w-full h-full flex-grow pt-12 overflow-auto">
      <div className="w-full h-full flex-grow p-3 overflow-auto">
        <AddTask task={task} addTask={addTask} changeHandler={changeHandler} />
        <div
          data-testid="task-list"
          className="grid grid-cols-4 pt-3 mt-4 mb-12 mx-6"
        >
          {data?.map((task) => (
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
