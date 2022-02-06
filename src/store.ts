import { StoreProvider, action, createStore } from 'easy-peasy';

const store = createStore({
  todos: [
  /*{
    id:1,
    text: "First",
    done: false,
  },
  {
    id:2,
    text: "First",
    done: false,
  },
  {
    id:3,
    text: "First",
    done: false,
  },
  {
    id:4,
    text: "First",
    done: false,
  },
  {
    id:5,
    text: "First",
    done: false,
  },

  {
    id:6,
    text: "First",
    done: false,
  },
  {
    id:7,
    text: "First",
    done: false,
  },
  {
    id:8,
    text: "First",
    done: false,
  },*/


  ],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false });
  }),
});

export { store };
