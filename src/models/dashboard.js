export default {
  namespace: 'dashboard',

  state: {
    tasks: [{ name: 'ansh' }, { name: 'Kad' }],
  },

  reducers: {
    addTask(state, { payload: task }) {
      return { ...state, tasks: state.tasks.concat(task) };
    },
  },

  effects: {},
};
