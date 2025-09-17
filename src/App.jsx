import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './components/login/Login.jsx'
import { SignUp } from './components/login/SignUp.jsx'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
