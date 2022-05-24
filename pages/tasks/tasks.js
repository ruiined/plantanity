import { Task } from "./task";
import { AddTask } from "./add";
import { Drag } from "./drag";
import React, { useEffect, useState, useCallback } from "react";
import update from "immutability-helper";
import { DndProvider, DragSource, DragPreviewImage } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "next/image";
import axios from "axios";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("");

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    setLoading(true);
    event.preventDefault();
    axios.get("/api/tasks/add?task=" + task).then(() => loadTasks());
  };

  const removeTask = (rtask) => {
    setLoading(true);
    axios.get("/api/tasks/remove?task=" + rtask).then(() => loadTasks());
  };

  const editTask = (etask, taskId) => {
    setLoading(true);
    axios
      .get("/api/tasks/edit?task=" + etask + "&id=" + taskId)
      .then(() => loadTasks());
  };

  const completeTask = (ctask) => {
    setLoading(true);
    axios.get("/api/tasks/complete?task=" + ctask).then(() => loadTasks());
  };

  const loadTasks = () => {
    axios.get("/api/tasks/list").then((res) => {
      setTasks(res.data.tasks);
      setLoading(false);
    });
  };

  const moveTask = useCallback((dragIndex, hoverIndex) => {
    setTasks((prevTasks) =>
      update(prevTasks, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevTasks[dragIndex]],
        ],
      })
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    loadTasks();
  }, []);

  if (!tasks) return "Loading...";
  return (
    <div>
      {loading ? (
        <Image alt="Loading" width={61} height={61} src="/loader.gif" />
      ) : (
        <div className="w-full h-full flex-grow p-3 overflow-auto">
          <AddTask addTask={addTask} changeHandler={changeHandler} />

          <div className="columns-4">
            <DndProvider backend={HTML5Backend}>
              {tasks
                .map((task, i) => (
                  <div key={task._id}>
                    <Drag
                      key={task._id}
                      index={i}
                      id={task._id}
                      moveCard={moveTask}
                    />
                    <Task
                      key={task._id}
                      task={task}
                      editTask={editTask}
                      removeTask={removeTask}
                      completeTask={completeTask}
                      index={i}
                    />
                  </div>
                ))}
            </DndProvider>
          </div>
        </div>
      )}
    </div>
  );
};
