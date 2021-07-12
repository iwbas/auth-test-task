import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from "./components/Home";
import About from "./components/About";
import UsersList from './components/UsersList';
import useToken from './hooks/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <main className="Main">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
