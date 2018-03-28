import React  from 'react';
import TaskList from './containers/TaskList';
import AddTask from './containers/AddTask';

const App = () => (
  <div>
    <h1>To Do List</h1>
    <hr />
    <AddTask />
    <TaskList />
  </div>
);

export default App;
