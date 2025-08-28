import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addTurf } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AddTurf = () => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    location: Yup.string().required(),
    price: Yup.number().required().positive(),
    description: Yup.string().required(),
  });

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <h2>Add Turf</h2>
        <Formik
          initialValues={{ title: '', location: '', price: '', description: '' }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await addTurf(values);
            navigate('/admin');
          }}
        >
          <Form>
            <div className="form-group">
              <label>Title</label>
              <Field name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <Field name="location" className="form-control" />
              <ErrorMessage name="location" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label>Price</label>
              <Field name="price" type="number" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <Field name="description" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Turf</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddTurf;
