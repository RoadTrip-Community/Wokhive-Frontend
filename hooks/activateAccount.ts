import { useMutation } from '@tanstack/react-query';
import { activateAccount } from '@/api/auth';
import { AxiosError } from 'axios';
import notify from '@/components/UI/toast';

export const useActivateAccount = () => {
  return useMutation({
    mutationFn: activateAccount,
    onSuccess: async (data: Promise<ApiResponse<ActivateAccountData>>) => {
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
