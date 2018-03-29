import axios from '../axios';
import {
  setTasks,
  addTask,
  removeTask,
  setTaskComplete,
  updateTask,
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

export const deleteTask = id => dispatch => {
  axios.delete('/tasks/' + id).then(() => {
    dispatch(removeTask(id));
  });
};

export const patchTaskComplete = id => dispatch => {
  axios.patch('/tasks/' + id + '/completed').then(({ data }) => {
    dispatch(setTaskComplete(data));
  });
};

export const putTask = data => dispatch => {
  axios.put('/tasks/' + data.id, data).then(({ data }) => {
    dispatch(updateTask(data));
  });
};
