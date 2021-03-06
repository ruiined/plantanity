import { statusToast } from '@components/notifications/toast';
import { AddTask } from '@components/tasks/add/form';
import { Task } from '@components/tasks/task';
import { taskListState } from '@lib/state/atoms';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const Tasks = () => {
  const [tasks, setTasks] = useRecoilState(taskListState);

  // const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   axios.post("/api/tasks/add?task=" + task).then(() => {
  //     loadTasks();
  //     statusToast("success", "Task added!");
  //   });
  //   setTask("");
  // };

  const removeTask = (rtask: string) => {
    axios.post("/api/tasks/remove?task=" + rtask).then(() => {
      loadTasks();
      statusToast("warn", "Task removed!");
    });
  };

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setTask(e.target.value);
  // };

  const editTask = (etask: string, taskId: string) => {
    axios
      .post("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => loadTasks());
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
  }, [tasks]);

  //   if (status === "loading") {
  //     return <img alt="Loading" width={61} height={61} src="/loader.gif" />;
  //   }

  //   if (status === "error") {
  //     return <span>Error: {error.message}</span>;
  //   }

  if (!tasks) return <span>No tasks yet</span>;

  return (
    <div className="w-full h-full flex-grow pt-12 overflow-auto">
      <div className="w-full h-full flex-grow p-3 overflow-auto">
        <AddTask />
        <div
          data-testid="task-list"
          className="grid grid-cols-4 pt-3 mt-4 mb-12 mx-6"
        >
          {tasks?.map((task) => (
            <ul key={task._id} data-testid="task-item">
              <Task
                task={task}
                editTask={editTask}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
