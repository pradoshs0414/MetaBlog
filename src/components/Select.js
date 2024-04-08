import React,{useID} from 'react'

function Select({
    label,
    className="",
    options,
    ...props
},ref) {
    const id = useID()
  return (
    <div>
  <label htmlFor={id} className="block text-sm font-medium text-gray-900"> {label} </label>

  <select
    name="HeadlineAct"
    id={id}
    className={`mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm ${className}`}
    {...props}
  >
    {options?.map((option)=>(
        <Option key = {option} value={option}>{option}</Option>
    ))}
  </select>
</div>
  )
}

export default Select