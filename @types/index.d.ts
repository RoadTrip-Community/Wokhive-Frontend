///////////////////////////
///////////////////////////
// Component Types(UI)

interface BreadCrumbProps {
  homeElement?: ReactNode;
  separator?: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  goBack?: boolean;
}

interface ButtonProps {
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
}

interface customInputProps {
  seeIcon?: boolean;
  size?: 'sm' | 'md';
  // inputType?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  inputType?:
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
  dropdownOptions?: { label: string; value: string }[];
  leadingText?: string;
  trailingButton?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: any;
}

interface InputProps extends customInputProps, React.InputHTMLAttributes<HTMLInputElement> {}

interface TextAreaProps extends customInputProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface SocialButtonProps {
  platform?: 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribble';
  theme?: 'brand' | 'colorWithBrand' | 'color';
  supportingText?: boolean;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerColor?: string;
  spinnerSize?: number;
  onClick?: () => void;
}

///////////////////////////
///////////////////////////
// Components

interface TeamProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  socials: {
    name: string;
    link: string;
  }[];
}

interface TestimonyProps {
  testimony: string;
  name: string;
  role: string;
}

interface ToastUIProps {
  type: 'success' | 'error' | 'loading' | 'custom';
  message: string;
  duration?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  style?: React.CSSProperties;
  className?: string;
  iconTheme?: {
    primary: string;
    secondary: string;
  };
  icon?: JSX.Element | string | null;
  id?: string;
}

interface waitlistMailingProps {
  recipient: string;
  name: string;
  verification_link: string;
}

///////////////////////////
///////////////////////////
// Context Types

interface FreelancerOnboardingContextProps {
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
}

interface StepsProps {
  onComplete: (isComplete: boolean) => void;
}

interface personalInfo {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
}

interface careerInfo {
  occupation: string;
  address: string;
}

interface bankInfo {
  bankName: string;
  accountNumber: string;
}

interface ClientOnboardingContextProps {
  personalInfo: personalInfo;

  careerInfo: careerInfo;

  bankInfo: bankInfo;

  setPersonalInfo: React.Dispatch<React.SetStateAction<typeof initialPersonalInfo>>;
  setCareerInfo: React.Dispatch<React.SetStateAction<typeof initialCareerInfo>>;
  setBankInfo: React.Dispatch<React.SetStateAction<typeof initialBankInfo>>;
}
///////////////////////////
///////////////////////////
// Freelancer Types

interface OnboardingStartScreenProps {
  onStart: () => void;
}

interface Language {
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Fluent' | null;
  disabled: boolean;
  proficiencyDisabled: boolean;
}

///////////////////////////
///////////////////////////
// Auth Types

interface signInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: string;
}
