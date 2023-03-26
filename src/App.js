import { useState } from "react";

import UserAuth from "./components/auth/UserAuth";

import { Form, Button } from 'react-bootstrap';
import Dashboard from "./components/Dashboard";
// import logo from './logo.svg';
// import './App.css';

function App() {

  const [showError, setShowError] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const [token, setToken] = useState(null);

  const handleAuth = (token) => {
    setToken(token);
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Container>
    //   <Row>
    //     <Col>
    <div className="App">
          {token ? (
            <div>
              <Dashboard onLogout={handleAuth} />
              {/* <h1>Welcome to the dashboard!</h1>
              <Button 
              onClick={handleLogout}
              >Logout</Button> */}
            </div>
          ) : (
            <div>
              <UserAuth onToken={handleAuth} />
              {/* <h1>Login</h1>
              {showError && (
                <Alert variant="danger">Invalid username or password.</Alert>
              )}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    // onChange={(event) => setUsername(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    // onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form> */}
            </div>
          )}
          </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
