import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { Attribution } from '@/components/attribution';

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
      <body className="bg-neutral-magnolia antialiased min-h-svh flex flex-col">
        <div className="flex-1">{children}</div>
        <Attribution className="flex-none" />
      </body>
    </html>
  );
}
