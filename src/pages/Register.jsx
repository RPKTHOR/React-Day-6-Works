import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addUser } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await addUser({ ...values, role: 'user' });
        navigate('/login');
      }}
    >
      <Form className="container mt-5">
        <h2>Register</h2>
        <div className="form-group">
          <label>Name</label>
          <Field name="name" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
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
        <button type="submit" className="btn btn-success mt-3">Register</button>
      </Form>
    </Formik>
  );
};

export default Register;
