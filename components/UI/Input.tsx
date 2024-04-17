/* eslint-disable react/jsx-props-no-spreading */
'use client';
import React, { useState } from 'react';
import { Eye, EyeSlash } from 'iconsax-react';
import HelpCircle from '../iconComponent/HelpCircle';
import AlertCircle from '../iconComponent/AlertCircle';

const Input: React.FC<InputProps> = ({
  size = 'md',
  inputType = 'text',
  elementType = 'input',
  type = 'default',
  destructive = false,
  label,
  hintText,
  helpIcon,
  icon,
  dropdownOptions,
  leadingText,
  trailingButton,
  name,
  value,
  onChange,
  register,
  disabled,
  className,
  ...rest
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const sizeClasses: { [K in InputProps['size']]?: string } = {
    sm: 'py-2 px-3 text-Text-sm h-10',
    md: 'py-2 px-4 text-base',
  };

  const classNames = `inline-flex gap-2 items-center relative  rounded-lg shadow border  ${sizeClasses[size]} ${
    destructive ? 'border-error-600' : 'border-gray-300'
  } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && inputValue !== '') {
      event.preventDefault();
      setTags((prevTags) => [...prevTags, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <div className='inline-flex flex-col w-full'>
        {label && <label className='mb-1.5 text-gray-700 text-Text-sm font-medium font-inter'>{label}</label>}
        <div className={classNames}>
          {type === 'iconLeading' && icon && <span>{icon}</span>}
          {type === 'leadingDropdown' && dropdownOptions && (
            <select>
              {dropdownOptions.map((option: { label: string; value: string }, index: number) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}

          {type === 'leadingText' && leadingText && <span className=''>{leadingText}</span>}
          {elementType === 'textarea' ? (
            <textarea
              className={`w-full resize-none ${type === 'iconLeading' && icon ? 'pl-10' : ''}`}
              disabled={disabled}
              onKeyDown={type === 'tags' ? handleKeyDown : undefined}
              {...rest}
            />
          ) : (
            <input
              {...(register ? register(name) : { value, onChange })}
              {...(onChange && { onChange })}
              {...(value && { value })}
              className={`w-full`}
              disabled={disabled}
              name={name}
              type={inputType === 'password' && isPasswordVisible ? 'text' : inputType}
              onKeyDown={type === 'tags' ? handleKeyDown : undefined}
              {...rest}
            />
          )}
          {type === 'tags' && tags.length > 0 && (
            <div className='flex flex-wrap mt-2'>
              {tags.map((tag, index) => (
                <span key={index} className='px-2 py-1 mr-1 bg-gray-200 rounded'>
                  {tag}
                </span>
              ))}
            </div>
          )}
          {inputType === 'password' && (
            <span className='absolute inset-y-3 cursor-pointer right-0 pr-3' onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <Eye color='#98A2B3' size={16} /> : <EyeSlash color='#98A2B3' size={16} />}
            </span>
          )}
          {helpIcon && inputType !== 'password' && (destructive ? <AlertCircle /> : <HelpCircle />)}
          {type === 'trailingButton' && trailingButton && <span>{trailingButton}</span>}
          {type === 'trailingDropdown' && dropdownOptions && (
            <select>
              {dropdownOptions.map((option: { label: string; value: string }, index: number) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
        {hintText && (
          <p className={`mt-1.5 text-Text-sm self-stretch ${destructive ? 'text-error-600' : 'text-gray-600'}`}>
            {hintText}
          </p>
        )}
      </div>

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
          -webkit-background-clip: text;
          -webkit-text-fill-color: '#101828';
          transition: background-color 5000s ease-in-out 0s;
          box-shadow: inset 0 0 20px 20px transparent;
        }

        input,
        select,
        textarea {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: 0;
          background-color: transparent;
          font-size: 1rem;
          line-height: 1.5;
          color: '#101828';
          transition:
            border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: 0;
          background-color: transparent;
          color: '#101828';
        }

        input:disabled,
        select:disabled,
        textarea:disabled {
          background-color: transparent;
          opacity: 1;
          color: '#667085';
        }
      `}</style>
    </>
  );
};

export default Input;
