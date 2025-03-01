'use client';
import { NextPage } from 'next';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SidebarIcons from './sidebarIcons';
import { ROUTES } from '@/constants/routes';

const sidebarItems = [
  {
    title: 'Overview',
    href: ROUTES.DASHBOARD,
    icon: <SidebarIcons.OverviewIcon />,
  },
  {
    title: 'Job postings',
    href: ROUTES.JOB_POSTINGS,
    icon: <SidebarIcons.JobPostingIcon />,
  },
  {
    title: 'Projects',
    href: ROUTES.PROJECTS,
    icon: <SidebarIcons.ProjectsIcon />,
  },
  {
    title: 'Messages',
    href: ROUTES.MESSAGE,
    icon: <SidebarIcons.MessagesIcon />,
  },
  {
    title: 'Contracts',
    href: ROUTES.CONTRACTS,
    icon: <SidebarIcons.ContractIcon />,
  },
  {
    title: 'Profile',
    href: ROUTES.PROFILE,
    icon: <SidebarIcons.ProfileIcon />,
  },
];

const sidebarOthers = [
  {
    title: 'Settings',
    href: ROUTES.SETTINGS,
    icon: <SidebarIcons.SettingsIcon />,
  },
  {
    title: 'Sign out',
    icon: <SidebarIcons.SignOutIcon />,
  },
];

const Sidebar: NextPage<{
  setSignoutModal: (value: boolean) => void;
}> = ({ setSignoutModal }) => {
  const pathname = usePathname();

  return (
    <div className='min-w-[280px] min-h-screen shrink-0 bg-white shadow-sidebar flex flex-col gap-16 py-10 pl-8 fixed z-20'>
      <Logo fill='currentColor' />

      <div className='flex-grow flex flex-col gap-12'>
        {sidebarItems.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center gap-4 self-stretch py-2 transition-all duration-500 ${
                pathname.includes(item.href)
                  ? 'text-primary-purple-60 border-r-8 border-primary-purple-60 font-semibold'
                  : 'text-gray-900'
              }`}
            >
              {item.icon}
              <p className={`text-xl ${pathname === item.href ? 'text-primary-purple-60' : 'text-gray-900'}`}>
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>

      <div className='flex flex-col gap-8'>
        {sidebarOthers.map((item, index) =>
          item.href ? (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center gap-4 self-stretch py-2 transition-all duration-500 ${
                pathname === item.href
                  ? 'text-primary-purple-60 border-r-8 border-primary-purple-60'
                  : item.title === 'Sign out'
                  ? 'text-error-error'
                  : 'text-gray-900'
              }`}
            >
              {item.icon}
              <p
                className={`text-xl ${
                  pathname === item.href && pathname !== '-out'
                    ? 'text-primary-purple-60 font-semibold'
                    : item.title === 'Sign out'
                    ? 'text-error-error'
                    : 'text-gray-900'
                }`}
              >
                {item.title}
              </p>
            </Link>
          ) : (
            <button
              key={index}
              className={`flex items-center gap-4 self-stretch py-2 transition-all duration-500 ${
                item.title === 'Sign out' ? 'text-error-error' : 'text-gray-900'
              }`}
              onClick={item.title === 'Sign out' ? () => setSignoutModal(true) : () => {}}
            >
              {item.icon}
              <p className={`text-xl ${item.title === 'Sign out' ? 'text-error-error' : 'text-gray-900'}`}>
                {item.title}
              </p>
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default Sidebar;
