import { createContext, useEffect, useRef, useState } from "react";
import { Filter } from "./components/Filter/Filter";
import { Form } from "./components/Form/Form";
import { Todos } from "./components/Todos/Todos";
import { initialTasks } from "./data/initialTasks";

export const statuses = {
  all: "all",
  new: "new",
  done: "done",
  archive: "archive",
};

const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : initialTasks;

export const TodoContext = createContext();

/**
 * Reducer - useReducer.
 * @returns
 */
function App() {
  const [todos, setTodos] = useState(initialData);
  const backup = useRef([]);
  const [isFilter, setisFilter] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    if (!isFilter) {
      backup.current = todos;
    }
  }, [isFilter, todos]);

  const addTask = (t) => {
    setTodos([...todos, t]);
  };

  const onDelete = (index) => {
    setisFilter(false);
    setTodos(todos.filter((t, inx) => inx !== index));
  };

  const onDone = (index) => {
    onUpdate(index, statuses.done);
  };

  const onUpdate = (index, status) => {
    setisFilter(false);
    return setTodos(
      todos.map((t, inx) => {
        if (index === inx) {
          return {
            ...t,
            status,
          };
        }
        return t;
      })
    );
  };

  const onDeleteAll = () => {
    setisFilter(false);
    setTodos([]);
  };

  const onMarkAllDone = () => {
    setisFilter(false);
    setTodos(
      todos.map((t) => {
        return { ...t, status: "done" };
      })
    );
  };

  const onArchive = (index) => {
    setisFilter(false);
    onUpdate(index, statuses.archive);
  };

  const onFilter = (status) => {
    setisFilter(() => {
      return true;
    });
    setTodos(
      status === statuses.all
        ? backup.current
        : backup.current.filter((x) => x.status === status)
    );
  };

  return (
    <TodoContext.Provider value={todos}>
      <div className="todos">
        <h1>Todo App using ReactJS</h1>
        <Form addTask={addTask} />
        <Filter onFilter={onFilter} />
        <Todos onDone={onDone} onDelete={onDelete} onArchive={onArchive} />
        <div>
          <button onClick={onDeleteAll}>Delete all</button>
          <button onClick={onMarkAllDone}>Mark all as done</button>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
