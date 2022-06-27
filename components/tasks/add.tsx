import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

export const AddTask = ({}) => {
  const queryClient = useQueryClient();

  const add = useMutation((task) => axios.post(`/api/tasks/add`, task));

  const handleSubmit = (e) => {
    e.preventDefault();
    add.mutate(new FormData(e.currentTarget).get("task"));
  };

  return (
    <form onSubmit={handleSubmit} className="flex place-content-center">
      <input
        className="input input-bordered w-full max-w-sm h-14 my-5 transition ease-in-out hover:border-green-200 duration-300"
        type="text"
        name="title"
        data-testid="task-input"
        autoComplete="off"
        aria-label="task title"
        autoFocus={true}
        placeholder="Enter your task here"
      />
    </form>
  );
};
