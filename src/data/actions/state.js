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

export const removeTask = id => {
  return {
    type: 'removeTask',
    id: id,
  }
};

export const setTaskComplete = task => {
  return {
    type: 'setTaskComplete',
    task: task,
  }
}

export const updateTask = task => {
  return {
    type: 'updateTask',
    task: task,
  }
}
