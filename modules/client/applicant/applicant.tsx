import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    label: 'Portfolio',
    href: '#',
  },
  {
    label: 'Recent Project',
    href: '#',
  },
  {
    label: 'Recent Project',
    href: '#',
  },
  {
    label: 'Recent Project',
    href: '#',
  },
];

const pics = ['/assets/images/layout.png', '/assets/images/planning.png', '/assets/images/wireframe.png'];

const Applicant = () => {
  return (
    <div className='flex flex-col gap-5 mb-9'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <Image src='/assets/images/avatar.png' alt='image' width={200} height={200} />
          <div className='flex flex-col gap-5'>
            <div>
              <h1 className='text-gray-700 text-3xl font-bold'>John Doe</h1>
              <p className='text-gray-500 text-2xl'>Freelance designer</p>
            </div>

            <p className='text-gray-500 text-xl font-normal'>Member since 12/06/2023</p>

            <div className='flex gap-5 items-center'>
              <div className='bg-primary-50 rounded-lg px-4 py-2 shadow-sm border border-primary-200 text-primary-purple-70 font-inter font-semibold cursor-pointer transition-all duration-500 hover:scale-95'>
                Accept proposal
              </div>
              <div className='text-error-700 cursor-pointer rounded-lg font-inter font-semibold transition-all duration-500 hover:scale-95'>
                Decline
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-col items-end'>
          <div className='flex justify-end gap-5'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M11.2787 3.45356C11.5092 2.98662 11.6245 2.75315 11.7809 2.67856C11.917 2.61366 12.0752 2.61366 12.2113 2.67856C12.3677 2.75315 12.483 2.98662 12.7135 3.45356L14.9002 7.88353C14.9682 8.02138 15.0022 8.0903 15.0519 8.14382C15.096 8.1912 15.1488 8.22959 15.2074 8.25687C15.2736 8.28767 15.3497 8.29878 15.5018 8.32102L20.3931 9.03595C20.9082 9.11124 21.1657 9.14888 21.2849 9.27468C21.3886 9.38414 21.4373 9.53454 21.4176 9.68402C21.3949 9.85582 21.2085 10.0374 20.8356 10.4006L17.2975 13.8467C17.1873 13.9541 17.1321 14.0078 17.0965 14.0717C17.065 14.1283 17.0448 14.1905 17.037 14.2548C17.0282 14.3274 17.0412 14.4032 17.0672 14.555L17.9021 19.4224C17.9901 19.9357 18.0341 20.1924 17.9514 20.3447C17.8794 20.4773 17.7514 20.5702 17.6032 20.5977C17.4327 20.6293 17.2022 20.5081 16.7412 20.2657L12.3685 17.9661C12.2322 17.8944 12.1641 17.8586 12.0923 17.8445C12.0288 17.8321 11.9634 17.8321 11.8999 17.8445C11.8281 17.8586 11.76 17.8944 11.6237 17.9661L7.25102 20.2657C6.79001 20.5081 6.5595 20.6293 6.38907 20.5977C6.24078 20.5702 6.11282 20.4773 6.04083 20.3447C5.95809 20.1924 6.00212 19.9357 6.09017 19.4224L6.92498 14.555C6.95101 14.4032 6.96402 14.3274 6.95521 14.2548C6.94742 14.1905 6.92721 14.1283 6.8957 14.0717C6.86012 14.0078 6.80497 13.9541 6.69468 13.8467L3.15665 10.4006C2.78376 10.0374 2.59731 9.85582 2.57462 9.68402C2.55488 9.53454 2.60365 9.38414 2.70734 9.27468C2.82653 9.14888 3.08407 9.11124 3.59914 9.03595L8.4904 8.32102C8.64252 8.29878 8.71857 8.28767 8.78481 8.25687C8.84346 8.22959 8.89626 8.1912 8.94028 8.14382C8.99 8.0903 9.02402 8.02138 9.09207 7.88353L11.2787 3.45356Z'
                fill='#817799'
                stroke='#817799'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M11.2787 3.45356C11.5092 2.98662 11.6245 2.75315 11.7809 2.67856C11.917 2.61366 12.0752 2.61366 12.2113 2.67856C12.3677 2.75315 12.483 2.98662 12.7135 3.45356L14.9002 7.88353C14.9682 8.02138 15.0022 8.0903 15.0519 8.14382C15.096 8.1912 15.1488 8.22959 15.2074 8.25687C15.2736 8.28767 15.3497 8.29878 15.5018 8.32102L20.3931 9.03595C20.9082 9.11124 21.1657 9.14888 21.2849 9.27468C21.3886 9.38414 21.4373 9.53454 21.4176 9.68402C21.3949 9.85582 21.2085 10.0374 20.8356 10.4006L17.2975 13.8467C17.1873 13.9541 17.1321 14.0078 17.0965 14.0717C17.065 14.1283 17.0448 14.1905 17.037 14.2548C17.0282 14.3274 17.0412 14.4032 17.0672 14.555L17.9021 19.4224C17.9901 19.9357 18.0341 20.1924 17.9514 20.3447C17.8794 20.4773 17.7514 20.5702 17.6032 20.5977C17.4327 20.6293 17.2022 20.5081 16.7412 20.2657L12.3685 17.9661C12.2322 17.8944 12.1641 17.8586 12.0923 17.8445C12.0288 17.8321 11.9634 17.8321 11.8999 17.8445C11.8281 17.8586 11.76 17.8944 11.6237 17.9661L7.25102 20.2657C6.79001 20.5081 6.5595 20.6293 6.38907 20.5977C6.24078 20.5702 6.11282 20.4773 6.04083 20.3447C5.95809 20.1924 6.00212 19.9357 6.09017 19.4224L6.92498 14.555C6.95101 14.4032 6.96402 14.3274 6.95521 14.2548C6.94742 14.1905 6.92721 14.1283 6.8957 14.0717C6.86012 14.0078 6.80497 13.9541 6.69468 13.8467L3.15665 10.4006C2.78376 10.0374 2.59731 9.85582 2.57462 9.68402C2.55488 9.53454 2.60365 9.38414 2.70734 9.27468C2.82653 9.14888 3.08407 9.11124 3.59914 9.03595L8.4904 8.32102C8.64252 8.29878 8.71857 8.28767 8.78481 8.25687C8.84346 8.22959 8.89626 8.1912 8.94028 8.14382C8.99 8.0903 9.02402 8.02138 9.09207 7.88353L11.2787 3.45356Z'
                fill='#625580'
                stroke='#625580'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M11.2787 3.45356C11.5092 2.98662 11.6245 2.75315 11.7809 2.67856C11.917 2.61366 12.0752 2.61366 12.2113 2.67856C12.3677 2.75315 12.483 2.98662 12.7135 3.45356L14.9002 7.88353C14.9682 8.02138 15.0022 8.0903 15.0519 8.14382C15.096 8.1912 15.1488 8.22959 15.2074 8.25687C15.2736 8.28767 15.3497 8.29878 15.5018 8.32102L20.3931 9.03595C20.9082 9.11124 21.1657 9.14888 21.2849 9.27468C21.3886 9.38414 21.4373 9.53454 21.4176 9.68402C21.3949 9.85582 21.2085 10.0374 20.8356 10.4006L17.2975 13.8467C17.1873 13.9541 17.1321 14.0078 17.0965 14.0717C17.065 14.1283 17.0448 14.1905 17.037 14.2548C17.0282 14.3274 17.0412 14.4032 17.0672 14.555L17.9021 19.4224C17.9901 19.9357 18.0341 20.1924 17.9514 20.3447C17.8794 20.4773 17.7514 20.5702 17.6032 20.5977C17.4327 20.6293 17.2022 20.5081 16.7412 20.2657L12.3685 17.9661C12.2322 17.8944 12.1641 17.8586 12.0923 17.8445C12.0288 17.8321 11.9634 17.8321 11.8999 17.8445C11.8281 17.8586 11.76 17.8944 11.6237 17.9661L7.25102 20.2657C6.79001 20.5081 6.5595 20.6293 6.38907 20.5977C6.24078 20.5702 6.11282 20.4773 6.04083 20.3447C5.95809 20.1924 6.00212 19.9357 6.09017 19.4224L6.92498 14.555C6.95101 14.4032 6.96402 14.3274 6.95521 14.2548C6.94742 14.1905 6.92721 14.1283 6.8957 14.0717C6.86012 14.0078 6.80497 13.9541 6.69468 13.8467L3.15665 10.4006C2.78376 10.0374 2.59731 9.85582 2.57462 9.68402C2.55488 9.53454 2.60365 9.38414 2.70734 9.27468C2.82653 9.14888 3.08407 9.11124 3.59914 9.03595L8.4904 8.32102C8.64252 8.29878 8.71857 8.28767 8.78481 8.25687C8.84346 8.22959 8.89626 8.1912 8.94028 8.14382C8.99 8.0903 9.02402 8.02138 9.09207 7.88353L11.2787 3.45356Z'
                fill='#423366'
                stroke='#423366'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <h1 className='text-gray-500 text-2xl font-semibold'>Wokhive Verified Professional</h1>

          <p className='text-gray-500 text-xl'>125 projects completed</p>
          <p className='text-gray-500 text-xl'>4.3 wokhive client rating</p>
          <p className='text-gray-500 text-xl'>Typically replies within the hour</p>
        </div>
      </div>

      <div className=' '>
        <h1 className='text-gray-700 text-3xl font-bold'>Cover letter</h1>
        <div className='bg-secondary-purple-10 rounded-lg p-6 mt-5'>
          <p className='text-gray-900 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ut velit at pretium. Aenean lobortis
            ante nec dapibus semper. Sed varius rhoncus odio, id consequat lectus luctus eu. Curabitur tristique rhoncus
            iaculis. Curabitur erat libero, egestas et tempus vitae, pharetra vel dui. Ut at sem ac neque hendrerit
            convallis. Aliquam ut metus laoreet, sodales odio egestas, sagittis risus. Sed eget turpis vestibulum,
            tincidunt ipsum nec, aliquet libero. Quisque vitae lobortis turpis. Vivamus ac velit non leo dictum iaculis
            eu eget felis. Vestibulum imperdiet maximus magna suscipit efficitur. Nunc ante arcu, tristique at justo in,
            consectetur viverra odio. Sed at neque est. Aliquam quis arcu libero.
          </p>
        </div>
      </div>

      <h1 className='text-gray-700 text-2xl font-bold'>Additional attachments</h1>

      <div className=' flex flex-col gap-3'>
        <p className='text-gray-700 '>External Links</p>

        <div className='grid grid-cols-2 gap-5'>
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className='bg-secondary-purple-10 p-5 rounded flex gap-2 text-gray-900 text-xl transition-all duration-500 hover:scale-95'
            >
              {link.label}
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14'
                  stroke='#101828'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-5'>
        <h1 className='text-gray-700 text-2xl font-bold'>Pictures and other attachments</h1>

        <div className='flex flex-wrap gap-3 mt-5'>
          {pics.map((items, index) => (
            <div key={index}>
              <Image src={items} alt='image' width={150} height={150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applicant;
