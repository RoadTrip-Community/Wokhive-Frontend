/* eslint-disable camelcase */
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/constants/routes';
import { getCookie } from 'cookies-next';

export const useUpdateFreelancerProfile = () => {
  const [loading, setLoading] = useState(false);

  const editProfile = async (data: any) => {
    setLoading(true);
    try {
      const token = getCookie('token');
      const response = await axios.patch(`${API_BASE_URL}/api/v1/users/freelancer/profile/edit`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const updateCareerLevel = async (career_level: string) => {
    return editProfile({ career_level });
  };

  const updateLanguages = async (languages: unknown) => {
    return editProfile({ languages });
  };

  const updateServices = async (services: string[]) => {
    return editProfile({ services });
  };

  const updateNIN = async (NIN: string) => {
    return editProfile({ NIN });
  };

  return { loading, updateCareerLevel, updateLanguages, updateServices, updateNIN };
};
