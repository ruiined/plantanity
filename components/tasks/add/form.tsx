import { statusToast } from "@components/notifications/toast";
import { taskItemState, taskListState } from "@lib/state/atoms";
import axios from "axios";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export const AddTask = () => {
  const [task, setTask] = useRecoilState(taskItemState);
  const setTaskList = useSetRecoilState(taskListState);
  const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    axios.post("/api/tasks/add?task=" + task).then(() => {
      statusToast("success", "Task added!");
    });

    setTask("");
  };
  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setTask(e.target.value);
  // };
  const changeHandler = ({ target: { value } }) => {
    setTask(value);
  };

  return (
    <form onSubmit={addTask} className="flex place-content-center">
      <input
        className="input input-bordered w-full max-w-sm h-14 my-5 transition ease-in-out hover:border-green-200 duration-300"
        type="text"
        name="title"
        data-testid="task-input"
        autoComplete="off"
        aria-label="task title"
        autoFocus={true}
        value={task}
        onChange={changeHandler}
        placeholder="Enter your task here"
      />
    </form>
  );
};
