import { Link } from 'react-router-dom'
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"

import { TitleLogin } from './TitleLogin.jsx'
import { FormInput } from './FormInput.jsx'
import { InputCamp } from './InputCamp.jsx'
import logo from '/icono-white.png'

function Login () {

  const handleLogin = (data) => {
    console.log("Datos del login:", data)
    // Aquí iría la llamada a la API para iniciar sesión
  }

  return (
    <main className='main__login'>
      <div className='login'>
        <TitleLogin
          title='Bienvenido de nuevo'
          imgLink={logo}
          statement={
            <>
              Inicia sesión para continuar con <br /> tu entrenamiento
            </>
          }
        />
        <FormInput buttonText='Iniciar sesión' onSubmit={handleLogin}>
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
