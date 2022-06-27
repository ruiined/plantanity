import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import { toast } from "react-toastify";
import { Task } from "@components/tasks/task";
import { AddTask } from "@components/tasks/add";
import { taskListState, taskItemState } from "@lib/recoil/atoms";

export declare interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

export const Tasks = () => {
  const [task, setTask] = useRecoilState(taskItemState);
  const [tasks, setTasks] = useRecoilState(taskListState);

  // const getTasks = async ({ queryKey }: any) => {
  //   const { data } = await axios.get(`/api/${queryKey[0]}`);
  //   let category = queryKey[0].split("/")[0];
  //   return data[category];
  // };

  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    axios
      .post("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => getTasks());
  };

  const completeTask = (ctask: string) => {
    axios.post("/api/tasks/complete?task=" + ctask).then(() => loadTasks());
  };

  const loadTasks = () => {
    axios.get("/api/tasks/list").then((res) => {
      setTasks(res.data.tasks);
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

//   if (status === "loading") {
//     return <img alt="Loading" width={61} height={61} src="/loader.gif" />;
//   }

//   if (status === "error") {
//     return <span>Error: {error.message}</span>;
//   }

  if (!data) return <span>No tasks yet</span>;

  return (
    <div className="w-full h-full flex-grow pt-12 overflow-auto">
      <div className="w-full h-full flex-grow p-3 overflow-auto">
        <AddTask />
        <div
          data-testid="task-list"
          className="grid grid-cols-4 pt-3 mt-4 mb-12 mx-6"
        >
          {data?.map((task) => (
            <ul key={task._id} data-testid="task-item">
              <Task
                task={task}
                editTask={editTask}
                completeTask={completeTask}
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
