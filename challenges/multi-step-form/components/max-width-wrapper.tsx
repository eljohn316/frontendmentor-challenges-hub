import * as React from 'react';
import { cn } from '@/lib/utils';

export function MaxwidthWrapper({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-lg px-4 lg:max-w-5xl', className)}
      {...props}
    />
  );
}
