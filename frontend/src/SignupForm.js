import React, {useState} from 'react';

function SignupForm({register}) {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(formData);
    setFormData(INITIAL_STATE);
  }
    return (
      <>
        <h1>Signup page</h1>
        <form onSubmit={handleSubmit}>
          <input name="firstName" type="text" placeholder="First Name" onChange={handleChange}/>
          <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange}/>
          <input name="email" type="text" placeholder="Email" onChange={handleChange}/>
          <input name="username" type="text" placeholder="Username" onChange={handleChange}/>
          <input name="password" type="text" placeholder="Password" onChange={handleChange}/>
          <button>Sign Up</button>
        </form>
      </>
    )
  }
  
  export default SignupForm;