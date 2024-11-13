import React, { useState } from 'react';
import { Layout, Typography, Alert } from 'antd';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { handleGoogleLogin } from '../../services/AuthService'; // Import the auth service
import { useNavigate } from 'react-router-dom';
import { GoogleOutlined } from '@ant-design/icons'; // Import Ant Design's Google icon
import './LoginPage.css'; // Import the CSS file for additional styling

const { Content } = Layout;
const { Title } = Typography;

const LoginPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle Google login success
  const handleGoogleSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse; // Extract credential from the response
    try {
      const response = await handleGoogleLogin(credential); // Use the auth service to handle login
      if (response.email) {
        setSuccess('Login successful! Redirecting to home...');
        setTimeout(() => {
          navigate('/home'); // Navigate to home page after successful login
        }, 2000);
      } else {
        setError('Google login failed. Please try again.');
      }
    } catch (error) {
      setError(error.message || 'Google login failed. Please try again.');
    }
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
    setError('Google login failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="591480352874-.apps.googleusercontent.com">
      <Layout className="login-page">
        <Content className="login-content">
          <Title level={3} className="login-title">Login with Google</Title>

          {error && <Alert message={error} type="error" showIcon className="alert-message" />}
          {success && <Alert message={success} type="success" showIcon className="alert-message" />}

          {/* Custom Google Login button with only icon */}
          <div className="google-login-btn">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              render={(renderProps) => (
                <button
                  className="google-login-button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <GoogleOutlined style={{ fontSize: '24px' }} /> {/* Google icon */}
                </button>
              )}
            />
          </div>
        </Content>
      </Layout>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
