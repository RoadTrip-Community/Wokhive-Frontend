import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

const TermsOfService: NextPage = () => {
  return (
    <div>
      <div className='border-b border-[#eee]'>
        <h2 className='py-4 text-Display-xs font-bold font-romela w-11/12 max-w-[1024px] mx-auto'>
          Terms of Service for Wokhive
        </h2>
      </div>
      <div className='relative w-11/12 max-w-[1024px] mx-auto'>
        <h1 className='font-bold font-romela text-[40px] leading-[60px] my-7 '>Terms of Service</h1>
        <p className='my-4 text-Text-md'>Last updated: March 27, 2024</p>
        <p className='my-4 text-Text-md'>
          These Terms of Service {'("Terms")'} govern your access to and use of Wokhive’s web application and the
          services offered through it {'(the "Services")'}.
        </p>
        <p className='my-4 text-Text-md'>
          By accessing our web application, you agree to be bound by these Terms. If you disagree with any part of the
          Terms, you may not access the web application.
        </p>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Definitions</h3>
        <p className='my-4 text-Text-md'>For the purposes of this Terms and Conditions:</p>
        <ul className='list-disc my-4 pl-10'>
          <li>
            <strong>Account</strong> means an account created by a User to access and use the Services.
          </li>
          <li>
            <strong>Client</strong>means a User who posts projects on the web-app, seeking services from Freelancers.
          </li>
          <li>
            <strong>Freelancer</strong> means a User who offers services to the clients.
          </li>
          <li>
            <strong>Project</strong> means a specific task or service requested by a Client and offered by a Freelancer
            on Wokhive’s platform.
          </li>
          <li>
            <strong>Services</strong> means all features and functionalities offered by the App, including but not
            limited to project posting, communication tools, and payment processing (if applicable).
          </li>
          <li>
            <strong>User</strong> means any individual or entity that accesses the web-app.
          </li>
        </ul>
        <h3 className='font-bold font-romela text-Display-xs my-6'>User Accounts</h3>

        <p className='my-4 text-Text-md'>
          When you create an account with us, you must provide us information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account on our Service.
        </p>
        <ul className='list-disc my-4 pl-10'>
          <li>
            You are responsible for maintaining the confidentiality of your account login information and for all
            activity that occurs under your account.
          </li>
          <li>You agree to keep your account information accurate and updated.</li>
        </ul>
        <h3 className='font-bold font-romela text-Display-xs my-6'>Client Responsibilities</h3>
        <p className='my-4 text-Text-md'>Clients are responsible for the following when using the Services:</p>

        <ul className='list-disc my-4 pl-10'>
          <li>Clients are responsible for providing accurate and complete information about their projects.</li>
          <li>Clients are responsible for communicating effectively with Freelancers throughout the project.</li>
          <li>Clients are responsible for timely payment to Freelancers in accordance with agreed-upon terms.</li>
        </ul>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Freelancer Responsibilities</h3>
        <p className='my-4 text-Text-md'>Freelancers are responsible for the following when using the Services:</p>

        <ul className='list-disc my-4 pl-10'>
          <li>Freelancers are responsible for accurately representing their skills and experience.</li>
          <li>Freelancers are responsible for delivering high-quality work on time and within budget.</li>
          <li>Freelancers are responsible for communicating effectively with Clients throughout the project.</li>
        </ul>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Intellectual Property</h3>

        <ul className='list-disc my-4 pl-10'>
          <li>
            The web-app and its original content, features, and functionality are and will remain the exclusive property
            of Wokhive and its licensors. The web-app is protected by copyright, trademark, and other laws of both the
            United States and foreign countries. Our trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of Wokhive.
          </li>
          <li>
            Content uploaded by Users remains the property of the respective User. However, by uploading content to the
            App, you grant us a non-exclusive license to use, reproduce, modify, publish, and distribute such content in
            connection with the operation of the App.
          </li>
        </ul>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Disclaimers</h3>

        <ul className='list-disc my-4 pl-10'>
          <li>
            We make no warranties, express or implied, about the accuracy, completeness, or reliability of the content
            or information on the App.
          </li>
          <li>We are not responsible for any disputes arising between Clients and Freelancers.</li>
          <li>We disclaim all liability for any damages arising out of or related to your use of the App.</li>
        </ul>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Entire Agreement</h3>
        <ul className='list-disc my-4 pl-10'>
          <li>These Terms constitute the entire agreement between you and us regarding your use of the web-app.</li>
        </ul>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Updates to Terms of Service</h3>
        <ul className='list-disc my-4 pl-10'>
          <li>
            We may update these Terms at any time by posting the revised terms on the App. Your continued use of the App
            following the posting of revised Terms means that you accept and agree to the changes.
          </li>
        </ul>

        <h3 className='font-bold font-romela text-Display-xs my-6'>Contact Us</h3>
        <p className='my-4 text-Text-md'>If you have any questions about this Cookies Policy, You can contact us:</p>
        <ul className='list-disc my-4 pl-10'>
          <li>
            By email:{' '}
            <Link
              className='text-primary-purple-50 hover:text-primary-milk-60 transition-all'
              href='mailto:wokhive@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              wokhive@gmail.com
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfService;
