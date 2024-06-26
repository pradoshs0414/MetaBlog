import React from 'react'

function Button({
  className='',
  label = 'Button',
  ...props
}) {
  return (
    <button
    className={`px-8 py-4 text-white duration-100 bg-indigo-600 rounded-lg shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2 ${className}`}
   { ...props}
>
    {label}
</button>
  )
}

export default Button