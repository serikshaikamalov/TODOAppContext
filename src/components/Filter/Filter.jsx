import React from "react";
import { statuses } from "../../App";
import "./filter.css";

export const Filter = ({ onFilter }) => {
  const taskStatuses = Object.values(statuses);

  return (
    <div className="statuses">
      {taskStatuses.map((s) => {
        return (
          <div key={s} onClick={() => onFilter(s)}>
            {s}
          </div>
        );
      })}
    </div>
  );
};
