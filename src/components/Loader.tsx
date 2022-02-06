import React from 'react'


export const Loader = ({ isLoading = false}) => (
  <span className='loader'>
    {isLoading ? <img src={""} alt='loading content' /> : null}
  </span>
)


