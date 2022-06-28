import React from "react";

interface AddInterface {
  addTask: React.FormEventHandler<HTMLFormElement>;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
  task: string;
}

export const AddTask = ({ task, addTask, changeHandler }: AddInterface) => {
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
