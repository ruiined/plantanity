import { atom } from "recoil";

export const taskListState = atom({
  key: "TaskList",
  default: [],
});

export const taskItemState = atom({
  key: "TaskItem",
  default: "",
});
