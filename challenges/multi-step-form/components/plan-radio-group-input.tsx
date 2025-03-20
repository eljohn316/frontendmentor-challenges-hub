import Image from 'next/image';
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';
import { PLANS } from '@/constants';
import { useFormContext } from 'react-hook-form';
import { TFormSchema } from '@/lib/schema';

export function PlanRadioGroupInput({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        'space-y-3 lg:flex lg:space-y-0 lg:gap-x-[1.125rem]',
        className
      )}
      {...props}
    />
  );
}

export function PlanRadioGroupInputItem({
  className,
  value,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  const { watch } = useFormContext<TFormSchema>();
  const billing = watch('billing') ? 'yearly' : 'monthly';

  return (
    <label
      className={cn(
        billing === 'yearly' ? 'items-start' : 'items-center',
        'border-neutral-light-gray has-checked:border-primary-purple-blue hover:border-primary-purple-blue flex cursor-pointer gap-x-3.5 rounded-lg border px-4 py-[14px] has-checked:ring-0 lg:flex-1 lg:flex-col lg:items-start lg:gap-x-0 lg:gap-y-10'
      )}>
      <RadioGroupPrimitive.Item
        className={cn('sr-only', className)}
        value={value}
        {...props}
      />
      <Image
        src={PLANS[value as keyof typeof PLANS].img}
        alt="Icon"
        width={40}
        height={40}
        className="size-10 shrink-0"
      />
      <div className="space-y-0.5">
        <p className="text-primary-marine-blue text-base font-medium">
          {PLANS[value as keyof typeof PLANS].label}
        </p>
        <p className="text-neutral-cool-gray text-sm">
          {PLANS[value as keyof typeof PLANS].pricing.label(billing)}
        </p>
        {billing === 'yearly' && (
          <p className="text-primary-marine-blue text-xs">2 months free</p>
        )}
      </div>
    </label>
  );
}
