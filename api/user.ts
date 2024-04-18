import { axiosInstanceWithAuth } from './axiosInstance';

export const editFreelancerProfile = async (values: FreelancerOnboardingContextProps) => {
  return (await axiosInstanceWithAuth.patch('users/freelancer/profile/edit', values)).data;
};

export const editClientProfile = async (values: ClientOnboardingContextProps) => {
  return (await axiosInstanceWithAuth.patch('users/client/profile/edit', values)).data;
};

export const deleteFreelancerProfile = async () => {
  return (await axiosInstanceWithAuth.delete('users/freelancer/profile/edit')).data;
};

export const deleteClientProfile = async () => {
  return (await axiosInstanceWithAuth.delete('users/client/profile/edit')).data;
};
