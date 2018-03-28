export const setTasks = tasks => {
  return {
    type: 'setTasks',
    tasks: tasks,
  };
};

export const addTask = task => {
  return {
    type: 'addTask',
    task: task,
  };
};
