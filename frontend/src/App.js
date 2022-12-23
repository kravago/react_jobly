import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './Navbar';
import JoblyApi from './api';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [currentToken, setCurrentToken] = useState('');
  const login = async (loginFormData) => {
    const res = await JoblyApi.login(loginFormData);
    setCurrentToken(res.token);
  }
  const register = async (signupFormData) => {
    const res = await JoblyApi.register(signupFormData);
    setCurrentToken(res.token);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes login={login} register={register}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
