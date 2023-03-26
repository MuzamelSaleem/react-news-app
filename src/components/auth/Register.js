import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function Register() {
    const [name, setName] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle registration logic here
      axios.post('http://localhost:8000/api/register', { name, email, password, password_confirmation })
      .then(response => {
        // props.onLogin(response.data.access_token);
      })
      .catch(error => {
        setError(error.response.data.message);
      });
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        {/* <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group> */}
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirme Password</Form.Label>
          <Form.Control type="password" placeholder="Confirme Password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    );
}



// const Register = () => {
    
//   }

export default Register;
  