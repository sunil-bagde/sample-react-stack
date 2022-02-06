import React from 'react'


export const Message = ({message=""}) => (
  message
    ? <span className='message'>{message}</span>
    : null
)


