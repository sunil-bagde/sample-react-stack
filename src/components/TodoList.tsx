import React, { useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import tw, {styled} from 'twin.macro'
import { useStoreActions } from 'easy-peasy'

const Ul = styled.ul`
    min-height: 145px
`
const TodoItem = ({
  id = '',
  text = '',
  isComplete = false,
  toggleTodo = () => {},
  deleteTodo = () => {},
}) => {
  return (
    <li css={tw`px-1 flex items-center max-h-40 `}>
      <div css={tw`flex-1`}>
        <label
          css={tw`mr-2`}
          htmlFor={`todoCheck${id}`}
          style={{ cursor: 'pointer' }}
        >
          <input
            type="checkbox"
            id={`todoCheck${id}`}
            checked={isComplete}
            onChange={() => toggleTodo(id)}
          />
        </label>
        {text}
      </div>
      <span className="delete-item">
        <button onClick={() => deleteTodo(id)}>X</button>
      </span>
    </li>
  )
}
export function TodoList({ filter }) {
  let todos = useStoreState(state => {
    return state.filterTodo(filter)
  })
  return (
    <div className="Todo-List drop-shadow-lg">
      <Ul css={tw` max-h-36 overflow-auto drop-shadow-lg `} style={{

      }}>
       {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </Ul>
    </div>
  )
}
