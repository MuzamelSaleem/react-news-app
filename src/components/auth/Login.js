import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./AuthSlice";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Loading from "../Loading";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((response) => {
        const token = response.data.access_token;
        props.onLogin(token);
        dispatch(login({ token })).then(() => {
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      {isLoading && <Loading />}
    </Form>
  );
}

export default Login;