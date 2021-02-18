import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';


export default function LoginForm(props) {
  const { showRegisterForm } = props;

  return (
   <Form className="login-form">
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo Electronico"
        // onChange={formik.handleChange}
        // error={formik.errors.name}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        // onChange={formik.handleChange}
        // error={formik.errors.password}
      />
      <div className="actions">
        <Button type="button" basic onClick={showRegisterForm}>
          Registrarse
        </Button>
        <div>
          <Button type="submit" className="submit" >
            Entrar
          </Button>
          <Button type="button">
            Has olvidado la Contraseña
          </Button>
        </div>
      </div>
    </Form>
  );
}
