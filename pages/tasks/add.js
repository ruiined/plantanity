import React from "react";

export const AddTask = ({ addTask, changeHandler }) => {
  return (
    <form onSubmit={addTask}>
      <input
        className="h-16"
        type="text"
        name="task"
        autoComplete="off"
        autoFocus={true}
        onChange={changeHandler}
        placeholder="Enter your task here"
      />
    </form>
  );
};
