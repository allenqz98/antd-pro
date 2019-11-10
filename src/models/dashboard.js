import _ from 'lodash';

export default {
  namespace: 'dashboard',

  state: {
    tasks: [
      { name: '+sacai,+blazer', id: 123, status: 'idle' },
      { name: '+yeezy,+350', id: 456, status: 'Waiting for Restock...' },
    ],
  },

  reducers: {
    addTask(state, { payload: task }) {
      return { ...state, tasks: state.tasks.concat(task) };
    },

    deleteTask(state, { payload: id }) {
      return {
        ...state,
        tasks: _.filter(state.tasks, task => task.id !== id),
      };
    },
  },

  effects: {},
};
