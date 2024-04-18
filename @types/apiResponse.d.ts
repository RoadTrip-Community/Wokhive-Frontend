type ApiResponse<T> = {
  status: string;
  message: string;
  data: T;
};

type UserData = {
  email: string;
  role: string;
  is_activated: boolean;
  profile: [
    {
      first_name: string;
      last_name: string;
      DOB: string | null;
      gender: string;
      occupation: string;
      career_level: string | null;
      address: string | null;
      display_picture: string | null;
      NIN: string | null;
      bank_name: string | null;
      bank_account_number: string | null;
    },
  ];
  services: string[];
  languages: string[];
};

type SignUpData = {
  user_id: string;
  user: UserData;
  token: string;
};

type ActivateAccountData = {
  user: UserData;
};

type SignInData = {
  user: UserData;
  access_token: string;
  refresh_token: string;
};
