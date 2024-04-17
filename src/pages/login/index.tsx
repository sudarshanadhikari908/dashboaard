import { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const response = await axiosInstance.post(
        'config/v1/auths/login',
        {
          login_id: formData?.username,
          login_password: formData?.password,
          ip_address: '182.93.95.159',
        }
      );
      if (response.status === 200) {
        cookies.set("token", response?.data?.data[0]?.jwt_token)
        navigate('/');
      }
    } catch (error) {
      setError('Invalid Username or Password');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className='form-title'>Login</h2>
        <div className="underline"></div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                placeholder='Username'
                name='username'
                type="text"
                id="username"
                value={formData?.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">

            <div className="input-with-icon">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id="password"
                value={formData?.password}
                onChange={handleInputChange}
                placeholder='Password'
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <button disabled={(formData.username.trim() === '' || formData.password.trim() === '') || formLoading} type="submit">  {formLoading && <FontAwesomeIcon icon={faSpinner} spin />} Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;