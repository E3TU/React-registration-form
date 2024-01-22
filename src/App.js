import { useState } from 'react';
import './App.css';

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="App">
      <div className="container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div className="success-message">Thank you for registering!</div> : null}
          <input onChange={handleFirstNameInputChange} value={values.firstName} id='first-name' className='form-field' placeholder='First Name' name='firstName'></input>
          {submitted && !values.firstName ? <span>Please enter a first name</span> : null }
          <input onChange={handleLastNameInputChange} value={values.lastName} id='last-name' className='form-field' placeholder='Last Name' name="lastName"></input>
          {submitted && !values.lastName ? <span>Please enter a last name</span> : null}
          <input onChange={handleEmailInputChange} value={values.email} id='email' className='form-field' placeholder='Email' name='email'></input>
          {submitted && !values.email ? <span>Please enter an email</span> :null}
        </form>
        <button id="register-btn">Register</button>
      </div>
    </div>
  );
}

export default App;
