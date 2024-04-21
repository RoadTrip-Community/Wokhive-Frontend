import { axiosInstanceV2 } from './axiosInstance';

export const waitlist = async (recipient: string) =>
  (await axiosInstanceV2.post('mailing/auth/email-verification', { recipient })).data;
