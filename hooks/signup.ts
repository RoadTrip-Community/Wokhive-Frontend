// export const useSignup = () => {
//   const [loading, setLoading] = useState(false);

//   const signup = async (data: signupHookProps) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(`${apiBaseUrl}/api/v1/users/signup`, JSON.stringify(data), {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setLoading(false);
//       return response;
//     } catch (error) {
//       setLoading(false);
//       throw error;
//     }
//   };

//   const activateAccount = async (token: string, email: string) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${apiBaseUrl}/api/v1/users/activate-account`,
//         JSON.stringify({ token, email }),
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         },
//       );

//       setLoading(false);
//       return response;
//     } catch (error) {
//       setLoading(false);
//       throw error;
//     }
//   };

//   return { loading, signup, activateAccount };
// };

import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/api/auth';
import { AxiosError } from 'axios';
import notify from '@/components/UI/toast';

export const useSignup = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: async (data: Promise<ApiResponse<SignUpData>>) => {
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
