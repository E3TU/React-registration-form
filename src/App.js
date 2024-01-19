import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <form className="register-form">
          <input className='form-field' placeholder='First Name' name='firstName'></input>
          <input className='form-field' placeholder='Last Name' name="lastName"></input>
          <input className='form-field' placeholder='Email' name='email'></input>
        </form>
        <button id="register-btn">Register</button>
      </div>
    </div>
  );
}

export default App;
