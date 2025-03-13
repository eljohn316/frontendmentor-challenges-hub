'use client';

import * as React from 'react';

import Image from 'next/image';
import bgSidebarMobileSvg from '@/public/images/bg-sidebar-mobile.svg';

import { Button } from '@/components/ui/button';
import { MaxwidthWrapper } from '@/components/max-width-wrapper';
import { FormWrapper } from '@/components/form-wrapper';

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="fixed inset-x-0 -z-10 h-44 overflow-hidden lg:hidden">
        <Image
          src={bgSidebarMobileSvg}
          alt="Background"
          className="size-full object-cover"
          priority
        />
      </div>
      <FormWrapper>Form</FormWrapper>
      <div className="flex-none bg-white p-4 lg:hidden">
        <MaxwidthWrapper className="flex items-center">
          <Button variant="ghost">Go back</Button>
          <Button variant="primary" className="ml-auto">
            Next Step
          </Button>
        </MaxwidthWrapper>
      </div>
    </div>
  );
}
