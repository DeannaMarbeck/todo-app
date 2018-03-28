import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import { getTasks } from '../data/actions/api';

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
