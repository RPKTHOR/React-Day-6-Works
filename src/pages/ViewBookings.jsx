import React, { useEffect, useState } from 'react';
import { getBookings } from '../services/ApiService';
import AdminNavbar from '../components/AdminNavbar';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBookings();
      setBookings(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <h2>All Bookings</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User</th>
              <th>Turf</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.user}</td>
                <td>{b.turf}</td>
                <td>{b.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewBookings;
