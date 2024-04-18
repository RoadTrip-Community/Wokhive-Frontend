import React, { useState, KeyboardEvent, useEffect } from 'react';
import { NextPage } from 'next';

type TagsInputProps = {
  tags: string[];
  selectedTags: (tags: string[]) => void;
};

const TagsInput: NextPage<TagsInputProps> = ({ tags, selectedTags }) => {
  const [inputTags, setInputTags] = useState<string[]>(tags);

  useEffect(() => {
    setInputTags(tags);
  }, [tags]);

  const removeTags = (indexToRemove: number) => {
    const newTags = [...inputTags.filter((_, index) => index !== indexToRemove)];
    setInputTags(newTags);
    selectedTags(newTags);
  };

  const addTags = (event: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue !== '' && !inputTags.includes(inputValue)) {
      const newTags = [...inputTags, inputValue];
      setInputTags(newTags);
      selectedTags(newTags);
      (event.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className='flex items-center flex-wrap min-h-[82px] w-[869px] px-4 pt-1 gap-2.5 shrink-0 rounded border border-[#585858] text-[#A9A9A9] text-Text-xl font-semibold focus-within:border-[#585858]'>
      <ul className='flex flex-wrap p-0 gap-3'>
        {inputTags.map((tag, index) => (
          <li
            key={index}
            className='w-auto bg-primary-purple-40 justify-center list-none flex py-4 px-8 items-center gap-2.5 rounded cursor-pointer'
            onClick={() => removeTags(index)}
          >
            <p className='text-primary-milk-10 text-Text-lg font-semibold capitalize'>{tag}</p>
          </li>
        ))}
      </ul>
      <input
        className='flex-1 outline-none h-[80px] border-none'
        placeholder='Type in something'
        type='text'
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
      />
    </div>
  );
};

export default TagsInput;
