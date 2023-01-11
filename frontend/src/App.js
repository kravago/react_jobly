import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './App.css';
import Routes from './Routes';
import NavBar from './Navbar';
import JoblyApi from './api';
import useLocalStorage from './useLocalStorage';
import userContext from './userContext';

function App() {
  const INITIAL_STATE = '';
  const USER_INIT_STATE = {};
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);
  const [userInfo, setUserInfo] = useState(USER_INIT_STATE);
  const [currentToken, setCurrentToken] = useLocalStorage('token');
  const [isLoading, setIsLoading] = useState(true);

  const login = async (loginFormData) => {
    try {
      const res = await JoblyApi.login(loginFormData);
      setCurrentToken(res.token);
      console.log("login success", res)
    } catch (e) {
      alert(e);
      console.error("Problem in login", e)
    }
  }

  const register = async (signupFormData) => {
    const res = await JoblyApi.register(signupFormData);
    setCurrentToken(res.token);
  }

  const logout = async () => {
    setCurrentToken(null);
    setCurrentUser(INITIAL_STATE);
    setUserInfo(USER_INIT_STATE);
  }

  useEffect(() => {
    // get user info each time there is a login
    const getUserInfo = async (username) => {
      JoblyApi.token = currentToken;
      const res = await JoblyApi.getUser(username);
      console.log("setUserInfo is called", userInfo)
      setUserInfo(res);
    }
    if (currentToken) {
      const {username} = jwt.decode(currentToken);
      console.log("setCurrentUser is called", currentUser)
      setCurrentUser(username);
      getUserInfo(username);
    }
    setIsLoading(false);
  }, [currentToken]);

  if (isLoading) {
    return (<div>LOADING</div>);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{userInfo, currentUser}}>
          <NavBar 
            currentUser={currentUser} 
            logout={logout}
          />
          <Routes 
            login={login} 
            register={register}
            token={currentToken}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
