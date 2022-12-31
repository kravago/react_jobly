import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './App.css';
import Routes from './Routes';
import NavBar from './Navbar';
import JoblyApi from './api';
import useLocalStorage from './useLocalStorage';

function App() {
  const INITIAL_STATE = '';
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);
  const [currentToken, setCurrentToken] = useLocalStorage('token');

  const login = async (loginFormData) => {
    const res = await JoblyApi.login(loginFormData);
    setCurrentToken(res.token);
  }

  const register = async (signupFormData) => {
    const res = await JoblyApi.register(signupFormData);
    setCurrentToken(res.token);
  }

  const logout = async () => {
    setCurrentToken(null);
    setCurrentUser(INITIAL_STATE);
  }

  useEffect(() => {
    // get user info each time there is a login
    if (currentToken) {
      const {username} = jwt.decode(currentToken);
      setCurrentUser(username);
    }
  }, [currentToken]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar 
          currentUser={currentUser} 
          logout={logout}
        />
        <Routes 
          login={login} 
          register={register}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
