import React from 'react'

interface InputfloatingProps {
  id: string
  name: string
  type: string
  placeholder: string
  size?: size | string
  errors?: any
}
enum size {
  'sm',
  'lg',
}
export const Inputfloating = React.forwardRef(
  (
    {
      id,
      name,
      type,
      placeholder,
      size,
      errors,
      ...initProps
    }: InputfloatingProps,
    ref: any
  ) => {
    let classNameInput = 'p-4 text-base'
    let classNameLabel =
      'ml-4 peer-placeholder-shown:top-4  peer-placeholder-shown:text-base peer-focus:text-sm text-sm'
    let color_code = errors ? 'red-500' : 'blue-500'
    if (size === 'sm') {
      classNameInput = 'p-2 text-sm'
      classNameLabel =
        'ml-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:text-xs text-xs'
    }

    return (
      <div className="relative">
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          className={`peer w-full rounded border placeholder-transparent
                    ease-in-out 
                    focus:outline-none active:outline-none
                    ${errors ? 'border-red-500' : 'border-gray-300'}
                    ${errors ? 'focus:border-red-500' : 'focus:border-blue-500'}
                    ${errors ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
                    focus:ring-1
                    ${classNameInput}`}
          placeholder=" "
          {...initProps}
        />
        <label
          htmlFor={id}
          className={`absolute left-0 -top-2.5 ml-4 bg-white
                    transition-all
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600
                    peer-focus:-top-2.5 
                    ${errors ? 'text-red-500' : 'text-gray-600'}
                    ${
                      errors
                        ? 'peer-focus:text-red-500'
                        : 'peer-focus:text-blue-500'
                    }
                    peer-focus:bg-white ${classNameLabel}`}
        >
          {placeholder}
        </label>
        <span
          className={`flex items-center font-medium tracking-wide text-${color_code} ${
            size == 'sm' ? 'text-xs' : 'text-sm'
          } mt-1 ml-1`}
        >
          {errors?.message}
        </span>
      </div>
    )
  }
)
