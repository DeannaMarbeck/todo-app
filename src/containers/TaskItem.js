import { connect } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { deleteTask, patchTaskComplete, putTask } from '../data/actions/api';

const mapDispatchToProps = (dispatch, { task }) => {
  return {
    onDelete: () => dispatch(deleteTask(task.id)),
    onComplete: () => dispatch(patchTaskComplete(task.id)),
    onEdit: data => dispatch(putTask(data)),
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
