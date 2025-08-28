import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="text-center mt-5">
    <h1>Welcome to Turf Management System</h1>
    <Link to="/login" className="btn btn-primary m-2">Login</Link>
    <Link to="/register" className="btn btn-success m-2">Register</Link>
  </div>
);

export default Welcome;
