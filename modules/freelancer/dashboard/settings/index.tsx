'use client';
import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import { useState } from 'react';
import SettingsProfile from './settingsProfile';
import Notifications from './notifications';
import Account from './account';
import Security from './security';
import Privacy from './privacy';

const Settings: NextPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    {
      name: 'Profile',
      id: 'profile',
    },
    {
      name: 'Privacy',
      id: 'privacy',
    },
    {
      name: 'Security',
      id: 'security',
    },
    {
      name: 'Notifications',
      id: 'notifications',
    },
    {
      name: 'Account',
      id: 'account',
    },
  ];

  return (
    <div className='flex pt-6 pb-20 flex-col w-full px-10 gap-5'>
      <div className='flex flex-col gap-9'>
        <p className='text-primary-purple-50 text-Display-extra font-bold'>Settings</p>
        <div className='flex justify-between items-center gap-5'>
          <div className='flex gap-8'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-primary-purple-50 text-Text-xl transition-all ${
                  activeTab === tab.id && 'font-semibold border-b-2 border-primary-purple-50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <Button hierarchy='secondary' size='sm'>
            Save Changes
          </Button>
        </div>
      </div>

      {activeTab === 'profile' && <SettingsProfile />}
      {activeTab === 'privacy' && <Privacy />}
      {activeTab === 'security' && <Security />}
      {activeTab === 'notifications' && <Notifications />}
      {activeTab === 'account' && <Account />}
    </div>
  );
};

export default Settings;
