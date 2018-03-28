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
      <div>
        <form onSubmit={this.onSubmit}>
          <Input onChange={this.onInputChange} value={this.state.value} />
          <button disabled={this.state.value.length < 3} className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
export default TaskList;
