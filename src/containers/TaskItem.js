import { connect } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { deleteTask } from '../data/actions/api';

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch(deleteTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(TaskList);
