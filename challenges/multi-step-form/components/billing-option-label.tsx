import { useFormContext } from 'react-hook-form';
import { TFormSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import React from 'react';

type BillingOptionLabelProps = {
  children: React.ReactNode;
  option: 'monthly' | 'yearly';
};

export function BillingOptionLabel({
  option,
  children
}: BillingOptionLabelProps) {
  const { watch } = useFormContext<TFormSchema>();
  const checked = watch('billing') ? 'yearly' : 'monthly';

  return (
    <p
      className={cn(
        checked === option
          ? 'text-primary-marine-blue'
          : 'text-neutral-cool-gray',
        'text-sm font-medium'
      )}>
      {children}
    </p>
  );
}
