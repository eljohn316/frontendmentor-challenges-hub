import { cn } from '@/lib/utils';
import * as React from 'react';

export function FormFieldsWrapper({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('flex-1', className)} {...props} />;
}
