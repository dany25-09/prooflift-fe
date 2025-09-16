import React from 'react'
import { Link } from 'react-router-dom'
import { faUser, faEnvelope, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"

import { Title } from './title.jsx'
import { FormInput } from './FormInput.jsx'
import { InputCamp } from './InputCamp.jsx'

function SignUp () {

  return (
    <main className='main__login'>
      <div className='h-screen flex flex-col justify-center gap-5 text-secondary lg:w-[50%] 
            lg:h-[95%] lg:bg-background lg:px-20 
            lg:gap-3 lg:pb-5 lg:rounded-2xl'>
            <Title
              title='Crear tu cuenta'
              imgLink='./src/assets/icono-white.png'
              statement='Únete y empieza a transformar tu cuerpo'
            />
            <FormInput buttonText='Crear cuenta'>
              <InputCamp
                icon={faUser}
                type='text'
                placeholder='Nombre completo'
                data='name'
              />
              <InputCamp
                icon={faEnvelope}
                type='email'
                placeholder='Correo electrónico'
                data='email'
              />
              <InputCamp
                icon={faLock}
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
                icon={faUnlock}
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
            <div className='login__p'>
              <p>¿Ya tienes una cuenta? <Link className='login__link' to='/'>Inicia sesión</Link></p>
            </div>
          </div>
    </main>
  )
}

export { SignUp }
