// import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'

function Login() {
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [showRegistration, setShowRegistration] = useState(false)
  const [fullName, setFullName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  

  const registration = (e) => {
    e.preventDefault()
    if (!fullName || !dni || !birthdate || !email || !phoneNumber || !password) {
      alert('Por favor, complete todos los campos obligatorios.')
      return
    }
    const user = {
      fullName,
      dni,
      birthdate,
      email,
      phoneNumber,
      password
    }
  
    fetch('usuarios.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        alert('Registro exitoso')
        setShowRegistration(false)
      } else {
        throw new Error('Error en el registro')
      }
    })
    .catch(error => {
        alert('Error en el registro')
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    
    // Obtener los datos del usuario desde el archivo JSON
    fetch('usuarios.json')
      .then(response => response.json())
      .then(data => {
        // Verificar si el DNI y la contraseña ingresados por el usuario coinciden con los datos almacenados en el archivo JSON
        const user = data.find(user => user.dni === dni && user.password === password)
        if (user) {
          // Si la verificación es exitosa, redirigir al usuario a la página de inicio
          alert('Inicio de sesión exitoso')
          history.push('/inicio')
        } else {
          // Si la verificación falla, mostrar un mensaje de error
          alert('DNI o contraseña incorrectos')
        }
      })
      .catch(error => {
        // Si ocurre un error al obtener los datos del usuario, mostrar un mensaje de error
        alert('Ocurrió un error al iniciar sesión')
      })
  }
  

  const handleRegistration = (e) => {
    e.preventDefault()
    // aquí iría la lógica para enviar los datos del registro al servidor
  }

  return (
    <div>
      {showRegistration ? (
        <form className='forms' onSubmit={handleRegistration}>
          <label>
            Nombre completo:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
          <label>
            DNI:
            <input type="number" value={dni} onChange={(e) => setDni(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Fecha de nacimiento:
            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Número de teléfono:
            <input type="number" pattern="[0-9]{10}" maxLength="9" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <div className='botones'>
            <button type="submit" onClick={registration}>Registrarme</button>
            <button onClick={() => setShowRegistration(false)}>Volver al inicio de sesión</button>
          </div>
        </form>
      ) : (
        <form className='forms' onSubmit={handleLogin}>
          <label>
            DNI: 
            <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
          </label>
          <label>
            Contraseña: 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div className='botones'>
            <button type="submit">Iniciar sesión</button>
            <button onClick={() => setShowRegistration(true)}>Registrarse</button>
          </div>
        </form>
      )}
    </div>
  )
  
}

export default Login
