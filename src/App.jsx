import './App.css';
import { useState } from "react";
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <main className="Main">
        <Switch>
          <Route path="/about">
            <Alert dismissible variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Change this and that and try again.</p>
            </Alert>
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
