import React, { useState } from 'react'
import './Contact.modules.css'


export function validate(inputs) {
  let errors = {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje'
  }
  return errors;
}
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Contact = () => {
  const [inputs, setInputs] = useState({
    name:'',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value
    });

    setErrors(
      validate({
        ...inputs,
        [name]: value
      })
    );
    
    if (name === 'email') {
      //validar el correo usando una expresion regular
      const isValidEmail = regexEmail.test(value);

      if (!isValidEmail) {
        setErrors({
          ...errors,
          email: 'Correo elecronico inválido'
        });
      } else {
        setErrors({
          ...errors,
          email: ''
        });
      }
    }
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorsArray = Object.values(errors);

    if (errorsArray.length === 0) {
      alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Debe llenar todos los campos')
    }
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Escribe tu nombre...'
        value={inputs.name}
        onChange={handleChange}
        className={errors.name ? 'warning' : ''}
        />
        {errors.name && <p className='danger'>{errors.name}</p>}

      <label htmlFor='email'>Correo Electrónico:</label>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='Escribe tu email...'
        value={inputs.email}
        onChange={handleChange}
        className= {errors.email ? 'warning' : ''}
      />
      {errors.email && <p className='error'>{errors.email}</p>}

      <label htmlFor='message'>Mensaje:</label>
      <textarea
        name='message'
        placeholder='Escribe tu mensaje...'
        value={inputs.message}
        onChange={handleChange}
        className={errors.message ? 'warning' : ''}
      ></textarea>
      {errors.message && <p className='danger'>{errors.message}</p>}

      <button type='submit'>Enviar</button>
    </form>
  </div>
  ); 
}

export default Contact;
