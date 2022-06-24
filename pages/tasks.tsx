import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
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
  const queryClient = useQueryClient();

  // const getTasks = async ({ queryKey }: any) => {
  //   const { data } = await axios.get(`/api/${queryKey[0]}`);
  //   let category = queryKey[0].split("/")[0];
  //   return data[category];
  // };

  const { status, data, error } = useQuery<Task[], Error>("tasks/list");

  // const { mutate } = useMutation(mutationFn, (mutationKey));

  // const add = () => mutate();

  // const addTask = (task: any) =>
  //   axios.post(`/api/tasks/add?task=${task}`, task);

  // const mutation = useMutation((task) => addTask(task));

  // const successToast = toast.success("Task added!", {
  //   position: "top-right",
  //   autoClose: 1000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setTask(e.target.value);
  // };

  // const removeTask = (rtask: string) => {
  //   axios.post("/api/tasks/remove?task=" + rtask).then(() => {
  //     getTasks();
  //     toast.warn("Task deleted", {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   });
  // };

  const editTask = (etask: string, taskId: string) => {
    axios
      .post("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => getTasks());
  };

  const completeTask = (ctask: string) => {
    axios.post("/api/tasks/complete?task=" + ctask).then(() => getTasks());
  };

  if (status === "loading") {
    return <img alt="Loading" width={61} height={61} src="/loader.gif" />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

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
