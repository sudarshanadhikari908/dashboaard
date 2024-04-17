import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://jp-dev.cityremit.global/web-api/config/v1/auths/login',
        {
          login_id: username,
          login_password: password,
          ip_address: '182.93.95.159',
        }
      );
      console.log(response.data);
    } catch (error) {
      setError('Invalid username or password');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className='form-title'>Login</h2>
      <div className="underline"></div>
      <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
        <div className="form-group">
          <div className="input-with-icon">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              placeholder='Username'
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">

          <div className="input-with-icon">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;