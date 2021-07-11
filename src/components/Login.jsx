import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PropTypes } from "prop-types";
import './Login.css';

function Login({ setToken }) {
  return (
    <div className="Login">
      <h1>Log in</h1>
      <Form className="Login__Form">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
