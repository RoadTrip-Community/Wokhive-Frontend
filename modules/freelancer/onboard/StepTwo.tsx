'use client';
import React from 'react';
import { NextPage } from 'next';
import CustomService from './CustomService';
import { useFreelancerOnboarding } from '@/context/FreelancerOnboardingContext';
import TagsInput from './TagsInput';
import { useEffect, useState } from 'react';

const StepTwo: NextPage<StepsProps> = ({ onComplete }) => {
  const { setServicesOffered } = useFreelancerOnboarding();
  const [tags, setTags] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>(['Copywriting', 'Animation', 'Video Editing']);

  const handleOptionSelect = (option: string) => {
    setTags((prevTags) => {
      const newTags = [...prevTags, option];
      onComplete(newTags.length > 0);
      return newTags;
    });
    setSuggestions((prevSuggestions) => prevSuggestions.filter((suggestion) => suggestion !== option));
  };
  const selectedTags = (tags: string[]) => {
    setTags(tags);
    onComplete(tags.length > 0);
  };

  useEffect(() => {
    setServicesOffered(tags);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  return (
    <>
      <div>
        <h3 className='text-gray-900 text-Display-md mb-4'>What are the main services you offer?</h3>
        <p className='w-[757px] text-gray-700 text-Text-xl'>
          Choose at least one service that best describes the type of work you do. This helps us identify your unique
          expertise
        </p>

        <div className='mt-11 flex flex-col gap-20'>
          <TagsInput selectedTags={selectedTags} tags={tags} />

          <div className='inline-flex flex-col items-start gap-3.5'>
            <p className='text-gray-700 text-Display-xs'>Suggested</p>
            <div className='flex w-[750px] items-start content-start gap-5 flex-wrap'>
              {suggestions.map((suggestion, index) => (
                <CustomService key={index} onClick={() => handleOptionSelect(suggestion)}>
                  {suggestion}
                </CustomService>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
