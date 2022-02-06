import React, { Component } from 'react'
import { useStoreActions } from 'easy-peasy';
import tw from 'twin.macro'

export function TodoForm(props) {

 const addTodo = useStoreActions((actions) => actions.addTodo);
  const [value, setValue] = React.useState('');
  const handleSubmit = evt => {
    evt.preventDefault()
    addTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        css={tw`md:p-1 rounded bg-white outline-none border-2 border-purple-400 focus:border-purple-500 w-full`}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  )
}
