import React, { useEffect, useState } from 'react';
import { getTurfs, addToCart } from '../services/ApiService';
import UserNavbar from '../components/UserNavbar';
import TurfCard from '../components/TurfCard';

const UserDashboard = () => {
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    const fetchTurfs = async () => {
      const { data } = await getTurfs();
      setTurfs(data);
    };
    fetchTurfs();
  }, []);

  const handleAddToCart = async (turf) => {
    await addToCart(turf);
    alert(`${turf.title} added to cart`);
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-4">
        <h2 className="mb-4">Browse Turfs</h2>
        <div className="row">
          {turfs.map((turf) => (
            <div className="col-md-4" key={turf.id}>
              <TurfCard turf={turf} onAdd={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
