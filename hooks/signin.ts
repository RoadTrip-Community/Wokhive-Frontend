import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/auth';
import { AxiosError } from 'axios';
import notify from '@/components/UI/toast';
import { deleteCookie, setCookie } from 'cookies-next';

export const useSignIn = () => {
  return useMutation({
    mutationFn: login,
    onMutate: () => {
      deleteCookie('token');
    },
    onSuccess: async (data: Promise<ApiResponse<SignInData>>) => {
      notify({
        type: 'success',
        message: (await data).message,
      });
      setCookie('token', (await data).data.access_token);
    },
    onError: (error: AxiosError) => {
      notify({
        type: 'error',
        message: (error.response?.data as { message: string }).message || 'Something went wrong',
      });
    },
  });
};
