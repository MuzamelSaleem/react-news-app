import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import UserAuth from "./components/auth/UserAuth";
import Dashboard from "./components/Dashboard";
import { login, logout } from "./components/auth/AuthSlice";
import NavigationBar from'./components/navigation/NavigationBar';
import Profile from'./components/Profile';
// import { logout } from "./authSlice";
import { Container } from 'react-bootstrap';
import './App.css';

function App() {

  // const [showError, setShowError] = useState(false);
  // const [token, setToken] = useState(null);
  const authToken = localStorage.getItem('token');
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const token = localStorage.getItem('token');
      if (token) {
        // dispatch(setToken(token));
        dispatch(login({ token }));
      }
    }
  }, [dispatch, isLoggedIn]);

  // const handleAuth = (token) => {
  //   // const authToken = localStorage.getItem('token');
  //   setToken(token);
  // };

  return (

        <div className="App">
          {isLoggedIn ? (
            <div>
               <Router>
                <NavigationBar onLogout={handleLogout} />
                <Container>
                  <Routes>
                    <Route exact path="/" element={<Dashboard token={authToken} />} />
                    <Route path="/perferences" element={<Profile />} />
                  </Routes>
                  </Container>
                </Router>
            </div>
          ) : (
            <div>
              <Container>
                <UserAuth />
              </Container>
            </div>
          )}
        </div>
  );
}

export default App;
