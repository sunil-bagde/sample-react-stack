import {
  StoreProvider,
  action,
  createStore,
  computed,
  reducer,
} from 'easy-peasy'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import todos from './todosSampleData'
export const history = createBrowserHistory()
const store = createStore(
  {
   // router: reducer(connectRouter(history)),
    todos: todos,
    todoCount: computed(state => state.todos.length),
    filterTodo: computed(state => {
      return filter => {
        if (filter == 'active') {
          return state.todos.filter(todo => todo.done === false)
        }
        if (filter == 'completed') {
          return state.todos.filter(todo => todo.done === true)
        }
        return state.todos
      }
    }),
    addTodo: action((state, payload) => {
      state.todos.push({ text: payload, done: false })
    }),
  },
  {
    middleware: [/*routerMiddleware(history)*/],
  },
)

export { store }
