import { useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '@/constants/routes';
import { setCookie } from 'cookies-next';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);

  const signIn = async (values: signInProps) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiBaseUrl}/api/v1/users/signin`, JSON.stringify(values), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setCookie('token', response.data.data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      console.log('response', response.data.data.access_token);

      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { signIn, loading };
};
