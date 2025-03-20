import Image from 'next/image';
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/lib/utils';

export function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'border-neutral-light-gray data-[state="checked"]:bg-primary-purple-blue data-[state="checked"]:border-primary-purple-blue size-5 shrink-0 cursor-pointer rounded-sm border',
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <Image
          src="/images/icon-checkmark.svg"
          alt="Check icon"
          height={14}
          width={14}
          className="size-3.5"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
