import React, { useContext } from "react";
import { TodoContext } from "../../App";
import { Task } from "../Task/Task";

export const Todos = ({ onDelete, onDone }) => {
  const todos = useContext(TodoContext);

  return (
    <div>
      {todos.map((t, index) => (
        <Task
          key={index}
          task={t}
          index={index}
          onDelete={onDelete}
          onDone={onDone}
        />
      ))}
    </div>
  );
};
