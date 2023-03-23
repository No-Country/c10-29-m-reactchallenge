const registration = (e) => {
    e.preventDefault();
    const user = {
      fullName,
      dni,
      birthdate,
      email,
      phoneNumber
    };
  
    fetch('usuarios.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        // aquí iría la lógica para mostrar un mensaje de éxito
      } else {
        // aquí iría la lógica para mostrar un mensaje de error
      }
    })
    .catch(error => {
      // aquí iría la lógica para mostrar un mensaje de error
    });
  }

export default registration