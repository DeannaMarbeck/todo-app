import React from 'react';

const TaskItem = ({ task }) => (
  <li className="list-group-item">{task.task}</li>
);

export default TaskItem;
