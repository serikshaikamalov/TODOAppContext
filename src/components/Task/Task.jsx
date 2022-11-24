import React from "react";
import { statuses } from "../../App";
import "./task.css";

export const Task = ({ task, index, onDone, onDelete, onArchive }) => {
  return (
    <div className="task">
      <div
        className="left"
        style={{ color: task.status === statuses.archive ? "gray" : "#000" }}
      >
        <h3
          style={{
            textDecoration:
              task.status === statuses.done ? "line-through" : "none",
          }}
        >
          {index + 1}. {task.title}
        </h3>
        <p>{task.text}</p>
      </div>
      <div className="right">
        <button onClick={() => onDone(index)}>Done</button>
        <button onClick={() => onArchive(index)}>Archive</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
};
