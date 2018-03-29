import React, { Component } from "react";
import Input from './Input';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      value: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitTask({ task: this.state.value });
    this.setState({
      value: '',
    });
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <Input onChange={this.onInputChange} value={this.state.value} />
          <div className="input-group-append">
            <button disabled={this.state.value.length < 3} className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TaskList;
