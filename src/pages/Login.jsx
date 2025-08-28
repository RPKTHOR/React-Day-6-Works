import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getUsers } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={async ({ email, password }) => {
        const { data } = await getUsers();
        const user = data.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          navigate(user.role === 'admin' ? '/admin' : '/user');
        } else {
          alert('Invalid credentials');
        }
      }}
    >
      <Form className="container mt-5">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <Field name="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
