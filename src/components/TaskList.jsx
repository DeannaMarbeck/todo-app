import React, { Component } from "react";
import TaskItem from './TaskItem';

class TaskList extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.length ?
          <ul className="list-group">
            { tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
          :
          <p>No tasks found yet.  Please add some</p>
        }
      </div>
    );
  }
}
 export default TaskList;
