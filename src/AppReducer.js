import { useReducer } from "react";
import { Form } from "./components/Form/Form";
import { Todos } from "./components/Todos/Todos";
import { initialTasks } from "./data/initialTasks";
import { todosReducer } from "./reducer/todosReducer";

/**
 * Reducer - useReducer.
 * @returns
 */
function AppReducer() {
  const [tasks, dispatch] = useReducer(todosReducer, initialTasks);

  console.log("tasks: ", tasks);

  const addTask = (task) => {
    dispatch({
      type: "add",
      task,
    });
  };

  return (
    <div className="todos">
      <h1>Todo App using ReactJS</h1>
      <Form addTask={addTask} />
      {/* <Filter onFilter={onFilter} /> */}
      <Todos tasks={tasks} dispatch={dispatch} />
      <div>
        {/* <button onClick={onDeleteAll}>Delete all</button>
          <button onClick={onMarkAllDone}>Mark all as done</button> */}
      </div>
    </div>
  );
}

export default AppReducer;
