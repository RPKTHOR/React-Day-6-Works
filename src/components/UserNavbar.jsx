import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/user">Browse Turfs</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/cart">Cart</Link>
        <Link className="nav-link" to="/checkout">Checkout</Link>
        <button className="btn btn-outline-danger ms-auto" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default UserNavbar;
