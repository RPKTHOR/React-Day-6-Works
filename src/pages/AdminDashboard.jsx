
import React, { useEffect, useState } from 'react';
import { getTurfs, deleteTurf } from '../services/ApiService';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminDashboard = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTurfs = async () => {
    try {
      const { data } = await getTurfs();
      setTurfs(data);
    } catch (error) {
      console.error('Error fetching turfs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this turf?')) {
      try {
        await deleteTurf(id);
        fetchTurfs(); // Refresh list
      } catch (error) {
        console.error('Error deleting turf:', error);
      }
    }
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Manage Turfs</h2>
          <Link to="/admin/add" className="btn btn-success">Add Turf</Link>
        </div>

        {loading ? (
          <div className="text-center">Loading turfs...</div>
        ) : turfs.length === 0 ? (
          <div className="alert alert-info">No turfs available.</div>
        ) : (
          <div className="row">
            {turfs.map(turf => (
              <div className="col-md-4" key={turf.id}>
                <div className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{turf.title}</h5>
                    <p className="card-text">{turf.description}</p>
                    <p><strong>Location:</strong> {turf.location}</p>
                    <p><strong>Price:</strong> ₹{turf.price}</p>
                    <div className="d-flex justify-content-between">
                      <Link to={`/admin/edit/${turf.id}`} className="btn btn-primary btn-sm">Edit</Link>
                      <button onClick={() => handleDelete(turf.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
