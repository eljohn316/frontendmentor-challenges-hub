'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function FormActionsWrapper({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('hidden lg:flex lg:flex-none', className)} {...props} />
  );
}
