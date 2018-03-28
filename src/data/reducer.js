
const addTask = (state, { task }) => {
  let tasks = state.tasks.slice();
  tasks.push(task);
  return {
    tasks: tasks
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTask': return addTask(state, action);
    case 'setTasks': return { tasks: action.tasks };
    default: return state;
  }
}

export default reducer;
