import React, { useEffect, useState } from 'react';
import { getCart, createBooking, clearCart } from '../services/ApiService';
import UserNavbar from '../components/UserNavbar';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await getCart();
      setCart(data);
    };
    fetchCart();
  }, []);

  const handleCheckout = async () => {
    for (let item of cart) {
      await createBooking({ user: user.name, turf: item.title, date: new Date().toLocaleDateString() });
    }
    await clearCart();
    alert('Booking successful!');
    navigate('/user');
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-4">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>No items to checkout.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map(item => (
                <li key={item.id} className="list-group-item">
                  {item.title} – ₹{item.price}
                </li>
              ))}
            </ul>
            <button className="btn btn-success" onClick={handleCheckout}>Confirm Booking</button>
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;
