import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useApi } from '../context/ApiContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useApi();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required')
  });

  const onSubmit = (values, { setErrors }) => {
    const { email, password } = values;

    if (email === 'john@example.com' && password === 'john@123') {
      login({ email });
      navigate('/welcome');
    } else {
      setErrors({ password: 'Invalid credentials' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        <Form className="w-50 mx-auto">
          <div className="mb-3">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" className="text-danger" component="div" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" className="text-danger" component="div" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
