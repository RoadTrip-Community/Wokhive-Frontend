///////////////////////////
///////////////////////////
// Component Types(UI)

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hierarchy?: 'primary' | 'secondary' | 'tertiary' | 'link';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  destructive?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: number;
  className?: string;
};

type InputProps = {
  seeIcon?: boolean;
  size?: 'sm' | 'md';
  inputType?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  elementType?: 'input' | 'textarea';
  type?:
    | 'default'
    | 'iconLeading'
    | 'leadingDropdown'
    | 'trailingDropdown'
    | 'leadingText'
    | 'paymentMethod'
    | 'tags'
    | 'trailingButton';

  destructive?: boolean;
  state?: 'placeholder' | 'filled' | 'focused' | 'disabled';
  label?: string;
  hintText?: string;
  helpIcon?: React.ReactNode;
  icon?: React.ReactNode;
  dropdownOptions?: string[];
  leadingText?: string;
  trailingButton?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type SocialButtonProps = {
  platform?: 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribble';
  theme?: 'brand' | 'colorWithBrand' | 'color';
  supportingText?: boolean;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerColor?: string;
  spinnerSize?: number;
};

///////////////////////////
///////////////////////////
// Components

type TeamProps = {
  name: string;
  role: string;
  image: string | StaticImageData;
  socials: {
    name: string;
    link: string;
  }[];
};

type TestimonyProps = {
  testimony: string;
  name: string;
  role: string;
};

///////////////////////////
///////////////////////////
// Context Types

type FreelancerOnboardingContextProps = {
  experienceLevel: string;

  servicesOffered: string[];
  spokenLanguages: {
    spokenLanguages: {
      language: string;
      proficiency: 'Basic' | 'Conversational' | 'Fluent' | null;
    }[];
  };
  setExperienceLevel: React.Dispatch<React.SetStateAction<typeof initialExperienceLevel>>;
  setServicesOffered: React.Dispatch<React.SetStateAction<typeof initialServicesOffered>>;
  setSpokenLanguages: React.Dispatch<React.SetStateAction<typeof initialSpokenLanguages>>;
};

type StepsProps = {
  onComplete: (isComplete: boolean) => void;
};

type personalInfo = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
};

type careerInfo = {
  occupation: string;
  address: string;
};

type bankInfo = {
  bankName: string;
  accountNumber: string;
};

type ClientOnboardingContextProps = {
  personalInfo: personalInfo;

  careerInfo: careerInfo;

  bankInfo: bankInfo;

  setPersonalInfo: React.Dispatch<React.SetStateAction<typeof initialPersonalInfo>>;
  setCareerInfo: React.Dispatch<React.SetStateAction<typeof initialCareerInfo>>;
  setBankInfo: React.Dispatch<React.SetStateAction<typeof initialBankInfo>>;
};
///////////////////////////
///////////////////////////
// Freelancer Types

type OnboardingStartScreenProps = {
  onStart: () => void;
};

type Language = {
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Fluent' | null;
  disabled: boolean;
  proficiencyDisabled: boolean;
};

///////////////////////////
///////////////////////////
// Auth Types

type signInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
