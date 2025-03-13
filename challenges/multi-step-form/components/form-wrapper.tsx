import * as React from 'react';
import Image from 'next/image';
import bgSidebarDesktopSvg from '@/public/images/bg-sidebar-desktop.svg';

import { MaxwidthWrapper } from '@/components/max-width-wrapper';
import { Steps } from '@/components/steps';

export function FormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 lg:flex lg:items-center lg:justify-center">
      <MaxwidthWrapper className="space-y-8 pt-8 lg:space-y-0 lg:pt-0">
        <Steps view="sm" />
        <div className="shadow-main rounded-[10px] bg-white px-6 py-8 lg:flex lg:p-4">
          <div className="relative hidden lg:block lg:w-64 lg:flex-none">
            <Image
              src={bgSidebarDesktopSvg}
              alt="Background"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 z-10 px-8 py-10">
              <Steps view="lg" />
            </div>
          </div>
          <div className="flex-1 lg:self-center lg:px-[6.25rem]">
            {children}
          </div>
        </div>
      </MaxwidthWrapper>
    </div>
  );
}
