'use client';
import React from 'react';
import SocialButton from '@/components/UI/SocialButton';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from '@/public/assets/svgs/logo.svg';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import Link from 'next/link';
import bgOverlay from '@/public/assets/svgs/signup_bg.svg';
import signInImg from '@/public/assets/images/freelancer_signup_img.png';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '@/hooks/signin';
import { useGoogleSignIn } from '@/hooks/googleAuth';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

const signInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    }),
});

const SignInForm: NextPage = () => {
  const signInMutation = useSignIn();
  const googleSignInMutation = useGoogleSignIn();
  const router = useRouter();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signInProps>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: signInProps) => {
    await signInMutation.mutateAsync(data, {
      onSuccess: () => {
        reset();
        router.push(ROUTES.DASHBOARD);
      },
    });
  };

  const role = 'freelancer';

  const onGoogleSignIn = async () => {
    await googleSignInMutation.mutateAsync(role);
  };

  return (
    <section className='flex justify-center items-center min-h-screen overflow-hidden'>
      <div className='bg-primary-purple-60 relative min-w-[1440px] flex'>
        <div className='bg-white rounded-r-[40px] w-[774px] flex flex-col pt-10 items-center gap-12 min-h-[1024px] relative z-10'>
          <div className='flex w-[478px]'>
            <Image alt='logo' src={logo} />
          </div>

          <div className='flex w-[478px] pb-8 flex-col items-start gap-8'>
            <h3 className='text-gray-900 text-Display-xs font-medium'>Sign in</h3>

            <div className='flex w-full flex-col items-start gap-6'>
              <SocialButton
                platform='google'
                theme='brand'
                className='w-full'
                supportingText
                disabled={signInMutation.isPending}
                onClick={onGoogleSignIn}
              />
              <div className='w-full border relative'>
                <p className='text-gray-900 text-Text-sm px-4 bg-white absolute bottom-[calc(50%-10px)] left-1/2'>or</p>
              </div>

              <form className='flex w-full flex-col items-start gap-8' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col items-start gap-6 w-full'>
                  <div className='flex w-full flex-col items-start gap-6'>
                    <Input
                      destructive={errors.email?.message}
                      inputType='email'
                      label='Email address'
                      name='email'
                      placeholder='janedoe@gmail.com'
                      register={formRegister}
                      className='w-full'
                      disabled={signInMutation.isPending}
                      hintText={errors.email?.message}
                    />
                    <Input
                      destructive={errors.password?.message}
                      inputType='password'
                      label='Password'
                      name='password'
                      placeholder='********'
                      register={formRegister}
                      className='w-full'
                      disabled={signInMutation.isPending}
                      hintText={errors.password?.message}
                    />
                  </div>
                  <Link className='text-gray-900 text-Text-md font-medium' href={ROUTES.FORGOTPASSWORD}>
                    forgot password?
                  </Link>
                </div>

                <Button
                  hierarchy='primary'
                  size='xl'
                  className='w-full'
                  isLoading={signInMutation.isPending}
                  disabled={signInMutation.isPending}
                >
                  Sign in
                </Button>
              </form>
            </div>

            <p className='w-full text-gray-900 text-Text-md font-medium'>
              Don&#39;t have an account?{' '}
              <Link
                className='text-primary-purple-60 font-bold hover:text-primary-milk-70 focus:text-primary-700 transition-all'
                href={ROUTES.SIGNUP}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className='flex mt-36 ml-3 gap-5'>
          <div className='w-[31px] h-0.5 bg-[#F9F9F9] mt-7' />
          <div className='flex flex-col gap-2.5 w-[517px] py-2.5 items-start'>
            <h4 className='text-primary-milk-60 text-Display-md font-bold'>Stay Ahead With Wokhive</h4>
            <p className='text-gray-25 text-Text-lg font-medium'>
              Create your Wokhive account to manage your personal projects and connect with talents
            </p>
          </div>
        </div>

        <Image alt='bg overlay' className='absolute top-0 right-0' src={bgOverlay} />
        <Image alt='bg img' className='absolute bottom-0 right-0' height={799} src={signInImg} width={629} />
      </div>
    </section>
  );
};

export default SignInForm;
