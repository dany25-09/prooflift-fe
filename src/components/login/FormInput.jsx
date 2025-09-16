import React from 'react'
import { useForm } from 'react-hook-form'

function FormInput ({ children, buttonText }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form className='flex flex-col items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { register, errors, watch })
      )}
      <button className='w-[85%] h-10 text-lg button' type='submit'>
          {buttonText}
      </button>

    </form>
  )
}

export { FormInput }
