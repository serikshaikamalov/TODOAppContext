import { createContext, useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { Todos } from "./components/Todos/Todos";
import { initialTasks } from "./data/initialTasks";

const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : initialTasks;

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (t) => {
    setTodos([...todos, t]);
  };

  const onDelete = (index) => {
    setTodos(todos.filter((t, inx) => inx !== index));
  };

  const onDone = (index) => {
    setTodos(
      todos.map((t, inx) => {
        if (index === inx) {
          return {
            ...t,
            status: "done",
          };
        }
        return t;
      })
    );
  };

  const onDeleteAll = () => {
    setTodos([]);
  };

  const onMarkAllDone = () => {
    setTodos(
      todos.map((t) => {
        return { ...t, status: "done" };
      })
    );
  };

  return (
    <TodoContext.Provider value={todos}>
      <div className="todos">
        <h1>Todo App using ReactJS</h1>
        <Form addTask={addTask} />
        <Todos onDone={onDone} onDelete={onDelete} />
        <div>
          <button onClick={onDeleteAll}>Delete all</button>
          <button onClick={onMarkAllDone}>Mark all as done</button>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
