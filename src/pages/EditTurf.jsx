import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getTurfs, updateTurf } from '../services/ApiService';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const EditTurf = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const fetchTurf = async () => {
      const { data } = await getTurfs();
      const turf = data.find(t => t.id === parseInt(id));
      setInitialValues(turf);
    };
    fetchTurf();
  }, [id]);

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    location: Yup.string().required(),
    price: Yup.number().required().positive(),
    description: Yup.string().required(),
  });

  if (!initialValues) return <div className="text-center mt-5">Loading...</div>;

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <h2>Edit Turf</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={async (values) => {
            await updateTurf(id, values);
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
            <button type="submit" className="btn btn-primary mt-3">Update Turf</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditTurf;
