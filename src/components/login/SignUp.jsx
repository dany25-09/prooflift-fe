import React from 'react'
import { Link } from 'react-router-dom'

import { Title } from './title.jsx'
import { FormInput } from './FormInput.jsx'
import { InputCamp } from './InputCamp.jsx'

function SignUp () {
  // const password = watch('password', '')

  return (
    <div>
      <Title
        title='Crear tu cuenta'
        imgLink='./src/assets/icono-white.png'
        statement='Únete y empieza a transformar tu cuerpo'
      />
      <FormInput buttonText='Crear cuenta'>
        <InputCamp
          type='text'
          placeholder='Nombre completo'
          data='name'
        />
        <InputCamp
          type='email'
          placeholder='Correo electrónico'
          data='email'
        />
        <InputCamp
          type='password'
          placeholder='Contraseña'
          data='password'
          validate={{
            required: 'La contraseña es obligatoria',
            minLength: { value: 6, message: 'Mínimo 6 caracteres' },
            validate: value => {
              const specialChars = value.match(/[^a-zA-Z0-9]/g) || []
              return (
                specialChars.length >= 2 || 'Debe tener al menos 2 caracteres especiales'
              )
            }
          }}
        />
        <InputCamp
          type='password'
          placeholder='confirma tu contraseña'
          data='confirmPassword'
          validate={{
            validate: (value, { watch }) => {
              const password = watch('password')
              return value === password || 'Las contraseñas no coinciden'
            }
          }}
        />
      </FormInput>
      <div>
        <p>¿Ya tienes una cuenta? <Link to='/'>Inicia sesión</Link></p>
      </div>
    </div>
  )
}

export { SignUp }
