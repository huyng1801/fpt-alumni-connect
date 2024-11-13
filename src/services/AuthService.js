// services/AuthService.js
import axios from 'axios';

// Replace with your ASP.NET Core API endpoint URL
const API_BASE_URL = 'https://localhost:7168/api/v1/users';

export const handleGoogleLogin = async (token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      token: token,
    });

    if (response.status === 200) {
      return response.data; // Return user data or token received from the API
    } else {
      throw new Error('Login failed. Unexpected response status.');
    }
  } catch (error) {
    console.error('Error during Google login:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};

export default handleGoogleLogin; // Export default for better usability
