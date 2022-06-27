import { atom } from "recoil";

export const taskItemState = atom({
  key: "taskItem",
  default: "",
});

export const taskListState = atom({
  key: "taskList",
  default: [],
});
