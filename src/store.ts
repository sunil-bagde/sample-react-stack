import { StoreProvider, action, createStore, computed } from 'easy-peasy'

const store = createStore({
  todos: [
    {
      id: 1,
      text: 'Item 1',
      done: false,
    },
    {
      id: 2,
      text: 'Item 2',
      done: false,
    },
    {
      id: 3,
      text: 'Item 3',
      done: true,
    },
    {
      id: 4,
      text: 'Item 4',
      done: true,
    },
    {
      id: 5,
      text: 'Item 5',
      done: true,
    },

    {
      id: 6,
      text: 'Item 6',
      done: true,
    },
    {
      id: 7,
      text: 'Item 7',
      done: true,
    },
    {
      id: 8,
      text: 'Item 8',
      done: true,
    },
  ],
  todoCount: computed(state => state.todos.length),
  filterTodo:  computed((state) => {
    return (filter) => {
      if(filter =="active") {
        return state.todos.filter((todo) => todo.done === false)
      }
      if(filter =="completed") {
        return state.todos.filter((todo) => todo.done === true)
      }
      return state.todos
    };
  }),
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false })
  }),
})

export { store }
