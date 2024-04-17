import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// inter is a Google Font
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// public\fonts\whyte_inktrap\WhyteInktrap-Thin.woff2
export const whyte = localFont({
  src: [
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/whyte_inktrap/WhyteInktrap-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-whyte',
});

// public\fonts\romela\Romela-Thin.woff
export const romela = localFont({
  src: [
    {
      path: '../public/fonts/romela/Romela-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/romela/Romela-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-romela',
});
