import React from "react";
import { Task } from "../Task/Task";

export const Todos = ({ tasks, dispatch }) => {
  return (
    <div>
      {tasks.map((t, index) => (
        <Task key={index} task={t} index={index} dispatch={dispatch} />
      ))}
    </div>
  );
};
