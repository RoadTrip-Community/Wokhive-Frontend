import { useMutation } from '@tanstack/react-query';
import { waitlist } from '@/api/waitlist';
import { AxiosError } from 'axios';
import notify from '@/components/UI/toast';

export const useWaitlist = () => {
  return useMutation({
    mutationFn: waitlist,
    onSuccess: async (data: Promise<ApiResponse<unknown>>) => {
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
