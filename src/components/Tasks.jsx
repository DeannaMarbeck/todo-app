import React, { Component } from "react";
import TaskList from './TaskList';

class Tasks extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { uncompletedTasks, completedTasks } = this.props;
    return (
      <div>
        <TaskList title="Tasks" tasks={uncompletedTasks} />
        <TaskList title="Completed Tasks" tasks={completedTasks} />
      </div>
    );
  }
}

export default Tasks;
