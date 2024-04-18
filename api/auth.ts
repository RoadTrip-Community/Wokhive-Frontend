import { axiosInstance, axiosInstanceWithAuth } from './axiosInstance';

export const login = async (values: signInProps) => {
  return (await axiosInstance.post('users/signin', values)).data;
};

export const signUp = async (values: SignUpProps) => {
  return (await axiosInstance.post('users/signup', values)).data;
};

export const googleSignIn = async (role: string) => {
  return (await axiosInstance.get('users/google-signin', { params: { role } })).data;
};

export const oauth2callback = async (state: string) => {
  return (await axiosInstance.get('users/oauth2callback', { params: { state } })).data;
};

export const activateAccount = async (values: { email: string; token: string }) => {
  return (await axiosInstance.post('users/activate-account', values)).data;
};

export const forgotPassword = async (email: string) => {
  return (await axiosInstance.post('users/forgot-password', { email })).data;
};

export const setNewPassword = async (values: { email: string; password: string }) => {
  return (await axiosInstance.post('users/set-new-password', values)).data;
};

export const signOut = async () => {
  return (await axiosInstanceWithAuth.post('users/sign-out')).data;
};

export const refreshToken = async () => {
  return (await axiosInstanceWithAuth.post('users/refresh')).data;
};
