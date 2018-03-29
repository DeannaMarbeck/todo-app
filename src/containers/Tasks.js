import { connect } from 'react-redux';
import Tasks from '../components/Tasks';
import { getTasks } from '../data/actions/api';

const mapStateToProps = state => {
  return {
    uncompletedTasks: state.tasks.filter(t => !t.completed),
    completedTasks: state.tasks.filter(t => t.completed),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
