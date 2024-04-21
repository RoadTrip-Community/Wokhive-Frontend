import { axiosInstanceV2 } from './axiosInstance';

export const waitlist = async (email: string) => (await axiosInstanceV2.post('waitlists', { email })).data;
