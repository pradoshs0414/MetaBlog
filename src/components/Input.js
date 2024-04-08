import React,{useId} from 'react'

const Input = React.forwardRef(function Input (
   { label,
    type="text",
    className = "",
    ...props}
    ,ref)
{
    const id = useId()
    return (
        <div>
  <label htmlFor={id} className="block text-xs font-medium text-gray-700"> {label} </label>

  <input
    type={type}
    id={id}
    placeholder="john@rhcp.com"
    className= {`mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm ${className}`}
    ref={ref}
    {...props}
  />
</div>
    )
})

export default Input