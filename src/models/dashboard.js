export default {
  namespace: 'dashboard',

  state: {
    tasks: [{ name: '+sacai,+blazer' }, { name: '+yeezy,+350' }],
  },

  reducers: {
    addTask(state, { payload: task }) {
      return { ...state, tasks: state.tasks.concat(task) };
    },
  },

  effects: {},
};
