import './Login.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { PropTypes } from 'prop-types';
import API from '../api';

async function loginUser(credentials) {
  return API.post('/api-token-auth/', JSON.stringify(credentials), {
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.data);
}

function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const res = await loginUser({
        username,
        password,
      });

      setToken(res.token);
      console.log(res.token);
    } catch (err) {
      setShowAlert(true);
    }
  };

  return (
    <div className="Login">
      <h1>Log in</h1>
      <Form className="Login__Form" onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Alert className="Login__Alert" variant="danger" show={showAlert}>
          Повторите попытку
        </Alert>
      </Form>
      <p>username: test_super</p>
      <p>password: {'Nf<U4f<rDbtDxAPn'}</p>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
