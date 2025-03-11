import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:text-base',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-marine-blue px-4 py-3 text-white hover:bg-[#164A8A]',
        secondary:
          'bg-primary-purple-blue px-4 py-3 text-white hover:bg-[#928CFF]',
        ghost:
          'bg-transparent text-neutral-cool-gray hover:text-primary-marine-blue'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={cn(buttonVariants({ variant, className }))} {...props} />
  );
}
