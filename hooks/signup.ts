import { useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '@/constants/routes';

type signupHookProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
};

export const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (data: signupHookProps) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiBaseUrl}/api/v1/users/signup`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const activateAccount = async (token: string, email: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/v1/users/activate-account`,
        JSON.stringify({ token, email }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { loading, signup, activateAccount };
};
