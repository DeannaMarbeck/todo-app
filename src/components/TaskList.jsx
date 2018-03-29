import React from 'react';
import TaskItem from '../containers/TaskItem';

const TaskList = ({ title, tasks }) => (
  <div>
    <h2>{title}</h2>
    {tasks.length ?
      <ul className="list-group">
        { tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      :
      <p>No tasks found yet.</p>
    }
  </div>
);

export default TaskList;
