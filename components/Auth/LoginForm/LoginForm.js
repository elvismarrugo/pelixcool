import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';


export default function LoginForm(props) {
  const { showRegisterForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await registerApi(formData);
      if (response?.jwt) {
        toast.success('Registro exitoso')
        showLoginForm();
      } else {
        toast.error('Error al registrar el usuario, inténtelo mas tarde!');
      }
      setLoading(false);
    },
  });

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

function initialValues() {
  return {
    identifier: '',    
    password: '',
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}