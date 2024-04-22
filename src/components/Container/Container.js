import React from 'react'

const Container = ({children}) => {
  return (
    <div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>{children}</div>
  )
}

export default Container