import React, { useEffect, useState } from 'react';
import { getCart, addToCart } from '../services/ApiService';
import UserNavbar from '../components/UserNavbar';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const { data } = await getCart();
    setCart(data);
  };

  const removeItem = async (id) => {
    await fetch(`http://localhost:3001/cart/${id}`, { method: 'DELETE' });
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="container mt-4">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title} – ₹{item.price}
                <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
