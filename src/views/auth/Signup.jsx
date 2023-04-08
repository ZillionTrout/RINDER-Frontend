import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

export default function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '', 
    place: '',
    image: '',
    description: ''
  })
  const [password, setPassword] = useState('');
  const [passwordControl, setPasswordControl] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    if (password !== passwordControl) {
      setErrorMessage("Contraseña incorrecta")
    } else {
      setErrorMessage(undefined)
    }
  }, [passwordControl, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup({ username: user.username, email: user.email, password, place: user.place, image: user.image, description: user.description });
      navigate('/login');
    } catch (error) {
      console.error(error)
      setErrorMessage('Algo ha fallado, revisa tus datos')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input required type="text" name="username" value={user.username} onChange={handleChange} />
        <label>Email</label>
        <input required type="email" name="email" value={user.email} onChange={handleChange} />
        <label>Password</label>
        <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value) } />
        <label>Repeat the password</label>
        <input required type="password" name="passwordControl" value={passwordControl} onChange={(e) => setPasswordControl(e.target.value)} />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Register</button>
      </form>
      <div><p>¿Ya tienes una cuenta?<a href="./Login">Entra!</a></p></div>
    </div>
  )
}
