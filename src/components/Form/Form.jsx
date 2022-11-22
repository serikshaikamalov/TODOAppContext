import React, { useState } from "react";
import "./form.css";

export const Form = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (title.length === 0 || text.length === 0) {
      return alert("Форманы толтыр!");
    }

    addTask({
      title,
      text,
    });

    setTitle("");
    setText("");
  };

  return (
    <div>
      <div className="form-input">
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="form-input">
        <div>
          <label htmlFor="">Text:</label>
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button onClick={onSubmit} id="add">+Add</button>
    </div>
  );
};
