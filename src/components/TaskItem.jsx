import React, { Component } from 'react';
import Input from './Input';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      value: '',
      editing: false
    }
  }

  onDelete() {
    this.props.onDelete();
  }

  onComplete() {
    this.props.onComplete();
  }

  onEdit() {
    this.setState({
      value: this.props.task.task,
      editing: true,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      editing: false,
    });
    this.props.onEdit({
      id: this.props.task.id,
      task: this.state.value
    })
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <li className="list-group-item">
        { this.state.editing ?
          <form onSubmit={this.onSubmit}>
            <div className="input-group mb-3">
              <Input onChange={this.onInputChange} value={this.state.value} />
              <div className="input-group-append">
                <button disabled={this.state.value.length < 3} className="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
          :
          <div>
            <span className="task-text" onClick={this.onEdit}>{this.props.task.task}</span>
            <div className="task-buttons">
              <i
                className={ 'complete-task fa fa-' + (this.props.task.completed ? 'undo' : 'check') }
                aria-hidden="true"
                onClick={this.onComplete}>
              </i>
              <i
                className="fa fa-trash delete-task"
                aria-hidden="true"
                onClick={this.onDelete}>
              </i>
            </div>
          </div>
        }
      </li>
    );
  }
}

export default TaskItem;
