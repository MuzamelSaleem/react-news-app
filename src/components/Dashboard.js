import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
// import './Dashboard.css';

function Dashboard(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    props.onLogout(null);
  };

  useEffect(() => {
    axios.get('/api/data', { headers: { Authorization: `Bearer ${props.token}` } })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  }, [props.token]);

  return (
    <Container className="Dashboard">
      <h1>Dashboard</h1>
      <div>
              <h1>Welcome to the dashboard!</h1>
              <Button 
              onClick={handleLogout}
              >Logout</Button>
            </div>

      {/* {data && (
        <div>
          <h2>Welcome {data.username}!</h2>
          <p>Your email is {data.email}.</p>
        </div>
      )}
      {error && <div className="error">{error}</div>} */}
    </Container>
  );
}

export default Dashboard;
