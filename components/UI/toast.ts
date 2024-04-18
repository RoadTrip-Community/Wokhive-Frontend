import toast from 'react-hot-toast';

const notify = ({
  type,
  message,
  duration = 5000,
  position = 'top-right',
  style,
  className,
  iconTheme,
  icon,
  id,
}: ToastUIProps) => {
  const defaultStyle = {
    background:
      type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : type === 'loading' ? '#2b6cb0' : '#c05621',
    color: '#fff',
    fontSize: '14px',
  };

  const defaultTheme = {
    primary: defaultStyle.color,
    secondary: defaultStyle.background,
  };

  toast[type](message, {
    duration,
    position,
    style: style || defaultStyle,
    className,
    iconTheme: iconTheme || defaultTheme,
    icon,
    id,
  });
};

export default notify;
