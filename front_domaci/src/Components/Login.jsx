import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin123') {
      sessionStorage.setItem("role", "admin");
      navigate('/statistika');
    } 
    else if(email === 'vip@gmail.com' && password === 'vip123') {
      sessionStorage.setItem("role", "vip");
      navigate('/profile');
    }
    else if (email && password) {
      navigate('/profile'); 
      sessionStorage.setItem("role", "regular");
    } else {
      setError('Molimo vas da unesete validne podatke.');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>Prijava</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Lozinka</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit-btn" type="submit">Prijavi se</button>
        {error && <div className="error-message">{error}</div>}
      </form>
      <label htmlFor="register">Nemate Nalog?</label>
      <button className="register-link" onClick={goToRegister}>
        Registruj se
      </button>
    </div>
  );
};

export default Login;
