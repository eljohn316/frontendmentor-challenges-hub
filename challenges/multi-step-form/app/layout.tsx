import type { Metadata } from 'next';
import Image from 'next/image';
import localFont from 'next/font/local';

import '@/app/globals.css';
import { Providers } from '@/app/providers';

const ubuntu = localFont({
  src: [
    {
      path: '../public/fonts/Ubuntu-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Ubuntu-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Ubuntu-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-ubuntu'
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Multi-step form'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <Providers>
        <body className="bg-neutral-magnolia">
          <div className="absolute inset-x-0 top-0 -z-10 h-[10.75rem] lg:hidden">
            <Image
              src="/images/bg-sidebar-mobile.svg"
              alt="Mobile sidebar background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {children}
        </body>
      </Providers>
    </html>
  );
}
