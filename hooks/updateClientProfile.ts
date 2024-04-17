/* eslint-disable camelcase */
import { useState } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '@/constants/routes';
import { getCookie } from 'cookies-next';

export const useUpdateClientProfile = () => {
  const [loading, setLoading] = useState(false);

  const editProfile = async (data: any) => {
    setLoading(true);
    try {
      const token = getCookie('token');
      const response = await axios.patch(`${apiBaseUrl}/api/v1/users/client/profile/edit`, JSON.stringify(data), {
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

  const updatePersonalInfo = async (data: personalInfo) => {
    const { firstName, lastName, age, gender } = data;
    return editProfile({ first_name: firstName, last_name: lastName, age, gender: gender.toLowerCase() });
  };

  const updateCareerInfo = async (data: careerInfo) => {
    const { occupation, address } = data;
    return editProfile({ occupation, address });
  };

  const updateBankDetails = async (data: bankInfo) => {
    const { bankName, accountNumber } = data;
    return editProfile({ bank_name: bankName, bank_account_number: accountNumber });
  };

  return { loading, updatePersonalInfo, updateCareerInfo, updateBankDetails };
};
