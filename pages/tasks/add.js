import React from "react";

export const AddTask = ({ task, addTask, changeHandler }) => {
  return (
    <form onSubmit={addTask} className="flex place-content-center">
      <input
        className="input input-bordered w-full max-w-sm h-16 my-5 transition ease-in-out hover:border-green-200 duration-300"
        type="text"
        name="task"
        autoComplete="off"
        value={task}
        autoFocus={true}
        onChange={changeHandler}
        placeholder="Enter your task here"
        label="Task Name"
      />
    </form>
  );
};
