import React  from 'react';
import Tasks from './containers/Tasks';
import AddTask from './containers/AddTask';

const App = () => (
  <div>
    <h1>To Do List</h1>
    <hr />
    <AddTask />
    <Tasks />
  </div>
);

export default App;
