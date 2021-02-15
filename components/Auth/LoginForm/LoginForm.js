import React from 'react';

export default function LoginForm(props) {
  const { showRegisterForm } = props;
  return (
    <div>
      <h1>Estamos en inicio sesion</h1>
      <button onClick={showRegisterForm}>Ir al registro</button>
    </div>
  );
}
