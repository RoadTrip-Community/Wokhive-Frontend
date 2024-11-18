export const ROUTES = {
  // pages
  HOME: '/',
  COMINGSOON: '/coming-soon',
  CONTACT: '/contact',
  ABOUT: '/about',
  SERVICES: '/services',
  PRICING: '/pricing',
  FAQ: '/faq',
  TERMS: '/legal/terms',
  PRIVACY: '/legal/privacy-policy',
  COOKIE: '/legal/cookie-policy',

  // auth
  SIGNIN: '/#waitlist',
  SIGNUP: '/#waitlist',
  FORGOTPASSWORD: '/auth/forgot-password',
  RESETPASSWORD: '/auth/reset-password',
  RESETSUCCESS: '/auth/reset-password/success',
  FREELANCERSIGNUP: '/auth/freelancer/signup',
  CLIENTSIGNUP: '/auth/client/signup',

  // onboard
  ONBOARDFREELANCER: '/freelancer/onboard',
  FREELANCERKYC: '/freelancer/onboard/kyc',
  CLIENTKYC: '/client/onboard/kyc',
  ONBOARDCLIENT: '/client/onboard',

  // dashboard
  DASHBOARD: '/dashboard',
  PROJECTS: '/projects',
  MESSAGE: '/messages',
  CONTRACTS: '/contracts',
  JOB_POSTINGS: '/job-postings',
  SENDPROPOSAL: '/job-postings/send-proposal',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  SIGN_OUT: '/sign-out',

  JOB_DETAILS: (jobId: string) => `/job-postings/${jobId}`,
};

export const API_BASE_URL = 'https://wokhive-backend-python.onrender.com/api/v1/';
export const API_BASE_URL_V2 = 'https://wokhive.mrprotocoll.me/api/v1/';
