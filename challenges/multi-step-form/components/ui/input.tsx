import { cn } from '@/lib/utils';
import * as React from 'react';

export function Input({
  type,
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'border-neutral-light-gray focus-visible:border-primary-purple-blue text-primary-marine-blue placeholder:text-neutral-cool-gray aria-[invalid="true"]:border-primary-strawberry-red aria-[invalid="true"]:focus-visible:border-primary-strawberry-red block w-full cursor-pointer rounded-lg border bg-white px-4 py-3 text-[15px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none lg:text-base',
        className
      )}
      {...props}
    />
  );
}
