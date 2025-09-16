import React from 'react'
import { Link } from 'react-router-dom'
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"

import { Title } from './title.jsx'
import { FormInput } from './FormInput.jsx'
import { InputCamp } from './InputCamp.jsx'

function Login () {
  return (
    <main className='main__login'>
      <div className='login'>
        <Title
          title='Bienvenido de nuevo'
          imgLink='./src/assets/icono-white.png'
          statement={
            <>
              Inicia sesión para continuar con <br /> tu entrenamiento
            </>
          }
        />
        <FormInput buttonText='Iniciar sesión'>
          <InputCamp
            icon={faUser}
            type='email'
            placeholder='Correo electrónico'
            data='email'
          />
          <InputCamp
            icon={faLock}
            type='password'
            placeholder='Contraseña'
            data='password'
          />
        </FormInput>
        <div className='login__p'>
          <p>¿No tienes una cuenta? 
            <Link className='login__link' to='/signup'>Regístrate</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export { Login }
