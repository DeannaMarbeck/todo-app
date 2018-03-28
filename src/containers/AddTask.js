import { connect } from 'react-redux';
import AddTask from '../components/AddTask';
import { postTask } from '../data/actions/api';

const mapDispatchToProps = dispatch => {
  return {
    submitTask: data => dispatch(postTask(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
