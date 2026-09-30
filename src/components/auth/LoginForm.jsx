import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { authService } from '../../api/authService';
import usernameIcon from '../../assets/icons/username_vibrant_transparent_180x180.png';
import passwordIcon from '../../assets/icons/password_vibrant_transparent_180x180.png';
import loginIcon from '../../assets/icons/login_vibrant_transparent_180x180.png';

export const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('cha77026');
  const [password, setPassword] = useState('Changme@999');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await authService.login(username, password);

      if (response && response.statusCode === 200 && response.data) {
        const userData = response.data.user || {
          username,
          firstName: 'Chandan Kumar Reddy',
          lastName: 'Obili',
          email: 'chandan1114@gmail.com',
          roleName: 'Parent'
        };
        if (onLoginSuccess) {
          onLoginSuccess(userData);
        }
      } else {
        setErrorMessage(response.message || 'Login failed. Please verify credentials.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Unable to connect to Azure login server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-semibold text-red-600 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">error</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <Input
        id="login-username"
        label="Username or Email"
        placeholder="Enter username"
        imageIcon={usernameIcon}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <Input
        id="api-secret"
        label="Password"
        type="password"
        placeholder="Enter password"
        imageIcon={passwordIcon}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        actionLink={
          <a
            href="#forgot"
            onClick={(e) => { e.preventDefault(); alert('Password reset instructions sent to registered email.'); }}
            className="text-xs font-manrope font-semibold text-[#00677d] hover:text-[#004e5f] transition-colors"
          >
            Forgot password?
          </a>
        }
      />

      <Button
        type="submit"
        isLoading={isLoading}
        loadingText="Authenticating..."
        className="mt-2 w-full bg-[#38b6ff] hover:bg-[#2aa8f0] text-white shadow-md py-3 text-base font-bold rounded-xl flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[20px]">login</span>
        <span>Login to Portal</span>
      </Button>
    </form>
  );
};

export default LoginForm;
