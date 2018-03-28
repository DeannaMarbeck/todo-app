import axios from '../axios';
import {
  setTasks,
  addTask,
} from './state';

export const getTasks = () => dispatch => {
  axios.get('/tasks').then(({ data }) => {
    dispatch(setTasks(data));
  });
};

export const postTask = data => dispatch => {
  axios.post('/tasks', data).then(({ data }) => {
    dispatch(addTask(data));
  });
};
