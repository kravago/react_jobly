import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import JoblyApi from './api';
import userContext from './userContext';

function Profile() {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  const history = useHistory();
  const userInfo = useContext(userContext);
  const [formData, setFormData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password
  });

  // useEffect(() => {

  // })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // JoblyApi.updateUser(formData);
    setFormData(INITIAL_STATE);
    history.push('/');
  }
    return (
      <>
        <h1>Profile page</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <button>Save</button>
        </form>
      </>
    )
  }
  
  export default Profile;