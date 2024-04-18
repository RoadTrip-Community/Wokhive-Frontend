import { useMutation } from '@tanstack/react-query';
import { oauth2callback, googleSignIn } from '@/api/auth';
import { AxiosError } from 'axios';
import notify from '@/components/UI/toast';

export const useGoogleSignUp = () => {
  return useMutation({
    mutationFn: oauth2callback,
    onSuccess: async (data: Promise<ApiResponse<any>>) => {
      notify({
        type: 'success',
        message: (await data).message,
      });
    },
    onError: (error: AxiosError) => {
      notify({
        type: 'error',
        message: (error.response?.data as { message: string }).message || 'Something went wrong',
      });
    },
  });
};

export const useGoogleSignIn = () => {
  return useMutation({
    mutationFn: googleSignIn,
    onSuccess: async (data: Promise<ApiResponse<any>>) => {
      notify({
        type: 'success',
        message: (await data).message,
      });
    },
    onError: (error: AxiosError) => {
      notify({
        type: 'error',
        message: (error.response?.data as { message: string }).message || 'Something went wrong',
      });
    },
  });
};
