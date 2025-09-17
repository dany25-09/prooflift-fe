import { Link, useNavigate } from 'react-router-dom'
import { faUser, faEnvelope, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"

import { TitleLogin } from './TitleLogin.jsx'
import { FormInput } from './FormInput.jsx'
import { InputCamp } from './InputCamp.jsx'
import logo from '/icono-white.png'

function SignUp () {

  const navigate = useNavigate()

  const handleSignUp = (data, setButtonContent) => {
    console.log("Datos del registro:", data)
    setButtonContent('Creando cuenta...')
    
    setTimeout(() => navigate('/'), 2000)
  }

  return (
    <main className='main__login'>
      <div className='h-screen flex flex-col justify-center gap-5 text-secondary lg:w-[50%] 
            lg:h-[95%] lg:bg-background lg:px-20 
            lg:gap-2 lg:pb-5 lg:rounded-2xl'>
            <TitleLogin
              title='Crear tu cuenta'
              imgLink={logo}
              statement='Únete y empieza a transformar tu cuerpo'
            />
            <FormInput buttonText='Crear cuenta' onSubmit={handleSignUp}>
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
                      specialChars.length >= 2 || 'La contraseña requiere mínimo 2 caracteres especiales'
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
                  required: "Debes confirmar tu contraseña",
                  validate: (value, { password }) =>
                    value === password || "Las contraseñas no coinciden",
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
