import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/admin">Admin Panel</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/admin">Manage Turfs</Link>
        <Link className="nav-link" to="/admin/bookings">View Bookings</Link>
        <button className="btn btn-danger ms-auto" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
