const addTask = (state, { task }) => {
  let tasks = state.tasks.slice();
  tasks.push(task);
  return {
    tasks: tasks
  };
};

const removeTask = (state, { id }) => {
  let tasks = state.tasks.slice();
  return {
    tasks: tasks.filter(task => task.id !== id)
  };
};

const updateTask = (state, { task }) => {
  let tasks = state.tasks.slice();
  return {
    tasks: tasks.map(t => t.id === task.id ? task : t)
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTask': return addTask(state, action);
    case 'setTasks': return { tasks: action.tasks };
    case 'removeTask': return removeTask(state, action);
    case 'setTaskComplete': return updateTask(state, action);
    case 'updateTask': return updateTask(state, action);
    default: return state;
  }
};

export default reducer;
