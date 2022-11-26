/**
 * Состояниені басқаратын жалғыз функция
 * @param {*} tasks
 * @param {*} action
 * @returns
 */
export const todosReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [...tasks, action.task];
    case "delete":
      return tasks.filter((t, index) => index !== action.index);
    default:
      return tasks;
  }
};
