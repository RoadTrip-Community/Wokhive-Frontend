'use client';
import React from 'react';
import { useFreelancerOnboarding } from '@/context/FreelancerOnboardingContext';
import { NextPage } from 'next';
import Button from '@/components/UI/Button';
import { useEffect, useState } from 'react';

const StepThree: NextPage<StepsProps> = ({ onComplete }) => {
  const { setSpokenLanguages } = useFreelancerOnboarding();
  const [languages, setLanguages] = useState<Language[]>([
    { name: 'English', proficiency: null, disabled: true, proficiencyDisabled: false },
  ]);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const options = ['Basic', 'Conversational', 'Fluent'];

  useEffect(() => {
    setSpokenLanguages(languages);
  }, [languages, setSpokenLanguages]);

  const addLanguage = () => {
    const isLastLanguageEmpty = languages[languages.length - 1].name.trim() === '';
    if (!isLastLanguageEmpty) {
      setLanguages((prevLanguages) =>
        prevLanguages
          .map((lang) => ({ ...lang, disabled: true }))
          .concat({ name: '', proficiency: null, disabled: false, proficiencyDisabled: false }),
      );
    }
  };

  const handleLanguageChange = (index: number, value: string) => {
    setLanguages((prevLanguages) => {
      const newLanguages = prevLanguages.map((lang, i) => (i === index ? { ...lang, name: value } : lang));
      onComplete(newLanguages.every((lang) => lang.name && lang.proficiency));
      return newLanguages;
    });
  };

  const handleProficiencyChange = (index: number, proficiency: 'Basic' | 'Conversational' | 'Fluent' | null) => {
    setLanguages((prevLanguages) => {
      const newLanguages = prevLanguages.map((lang, i) =>
        i === index ? { ...lang, proficiency, proficiencyDisabled: false } : lang,
      );
      onComplete(newLanguages.every((lang) => lang.name && lang.proficiency));
      return newLanguages;
    });
    setIsOpen(null);
  };

  const toggleDropdown = (index: number) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='mb-12'>
        <h3 className='text-gray-900 text-Display-md mb-4'>Next, tell us which languages you speak</h3>
        <p className='w-[757px] text-gray-700 text-Text-xl'>
          At wokhive, most clients are interested to know what language you speak. English is a must, do you speak any
          other language?
        </p>
      </div>

      <div className='flex items-start gap-14 mb-4'>
        <div className='flex w-[622px] flex-col items-start gap-4'>
          <p className='text-gray-900 text-Text-lg font-medium'>Language</p>
        </div>

        <div className='flex w-[306px] flex-col items-start gap-4'>
          <p className='text-gray-900 text-Text-lg font-medium'>Proficiency</p>
        </div>
      </div>

      {languages.map((language, index) => (
        <>
          <div key={index} className='flex items-start gap-14 my-1'>
            <div className='flex w-[622px] flex-col items-start gap-4'>
              <input
                className='w-[622px] h-[72px] py-2.5 flex items-center text-gray-700 text-Text-xl disabled:text-[#A9A9A9] disabled:bg-white border-none outline-none'
                disabled={language.disabled}
                placeholder='Click to add a new language'
                type='text'
                value={language.name}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
              />
            </div>

            <div className='flex w-[306px] flex-col items-start gap-4'>
              <div className='relative'>
                <div
                  className={`w-[215px] h-[70px] px-2 flex items-center justify-start text-gray-700 text-Text-xl font-medium cursor-pointer ${
                    language.proficiencyDisabled ? 'opacity-50 pointer-events-none' : ''
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  <>
                    <span className='w-[181px] shrink-0 text-gray-700 inline-block text-Text-xl font-medium'>
                      {language.proficiency || 'Language Level'}
                    </span>
                    <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M19.9181 8.9502L13.3981 15.4702C12.6281 16.2402 11.3681 16.2402 10.5981 15.4702L4.07812 8.9502'
                        stroke='#292D32'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </>
                </div>

                {isOpen === index && (
                  <div className='absolute w-full mt-1 bg-white border border-gray-300 rounded-md z-10'>
                    {options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className='w-full h-[50px] flex items-center justify-start text-gray-700 text-Text-xl font-medium cursor-pointer hover:bg-gray-200 border px-2'
                        onClick={() =>
                          handleProficiencyChange(index, option as 'Basic' | 'Conversational' | 'Fluent' | null)
                        }
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`h-[0.1px] bg-gray-700 w-[900px] ${language.disabled ? 'block' : 'hidden'}`} />
        </>
      ))}
      <div className='mt-4'>
        <Button
          disabled={languages[languages.length - 1].name.trim() === ''}
          hierarchy='secondary'
          size='2xl'
          onClick={addLanguage}
        >
          Add a new language
        </Button>
      </div>
    </>
  );
};

export default StepThree;
