import React, { useState } from 'react';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import Login from "./Login";
import Register from "./Register";

function UserAuth({ onToken }) {
    // const [token, setToken] = useState(null);

    // const onLogin = (token) => {
    
    //     const updatedBooks = [
    //       ...books,
    //       { 
    //         id: Math.round(Math.random() * 9999), 
    //         title: title }
    //     ];
    
    //     setBooks(updatedBooks);
    //   };

    const handleLogin = (token) => {
        onToken(token);
      };

      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6">
              <h1 className="text-center">Login or Register</h1>
              <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                  <Login onLogin={handleLogin} />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <Register />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      );
}

// const UserAuth = () => {
    
//   }
  
  export default UserAuth;